Absolutely. For your **MERN practical**, learn both methods:

1. **Normal `docker run` command**
2. **`docker-compose.yml` / `compose.yml` method**

Both create essentially the same MongoDB setup.

---

# 1. Current / Normal Docker Command

First pull MongoDB:

```powershell
docker pull mongo:latest
```

Create and run the container:

```powershell
docker run -d `
  --name mongodb `
  -p 27017:27017 `
  -v mongodb_data:/data/db `
  mongo:latest
```

### Check it

```powershell
docker ps
```

You should see:

```text
CONTAINER ID   IMAGE          PORTS
xxxxx          mongo:latest   0.0.0.0:27017->27017/tcp
```

### MongoDB connection

```text
mongodb://localhost:27017
```

For a database:

```text
mongodb://localhost:27017/todoDB
```

### Enter MongoDB shell

```powershell
docker exec -it mongodb mongosh
```

Then:

```javascript
use todoDB

db.tasks.insertOne({
    title: "Learn MERN",
    completed: false
})

db.tasks.find()
```

---

# 2. Docker Compose / YAML Method

Create a folder:

```text
mern-project/
│
├── compose.yml
└── server/
```

You can also name it:

```text
docker-compose.yml
```

Both names work with modern Docker Compose.

### `compose.yml`

```yaml
services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

---

# 3. Start MongoDB using YAML

Open PowerShell in the folder containing `compose.yml`:

```powershell
docker compose up -d
```

Check:

```powershell
docker compose ps
```

Or:

```powershell
docker ps
```

You should see:

```text
mongodb
```

running on:

```text
27017
```

---

# 4. Stop MongoDB

```powershell
docker compose down
```

### Important

`docker compose down` removes the **container**, but normally keeps the named volume:

```text
mongodb_data
```

So your MongoDB data remains.

Start it again:

```powershell
docker compose up -d
```

Your previous data will still be there.

---

# 5. Complete YAML with Mongo Express

If you want a GUI for MongoDB, you can also run **Mongo Express**.

```yaml
services:

  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  mongo-express:
    image: mongo-express:latest
    container_name: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_URL: mongodb://mongodb:27017/
    depends_on:
      - mongodb

volumes:
  mongodb_data:
```

Start:

```powershell
docker compose up -d
```

Then MongoDB:

```text
mongodb://localhost:27017
```

Mongo Express GUI:

```text
http://localhost:8081
```

The important thing here is:

```yaml
ME_CONFIG_MONGODB_URL: mongodb://mongodb:27017/
```

Notice it uses:

```text
mongodb
```

instead of:

```text
localhost
```

because **Mongo Express is another Docker container**, and Docker's internal DNS lets it reach the MongoDB container by its service name.

---

# 6. Express + Docker MongoDB

Your Node/Express application running **directly on Windows** uses:

```js
mongoose.connect("mongodb://localhost:27017/todoDB");
```

But if your Express application is **also inside Docker Compose**, use:

```js
mongoose.connect("mongodb://mongodb:27017/todoDB");
```

### Remember this 👇

| Where Express runs | MongoDB URL |
|---|---|
| Windows / localhost | `mongodb://localhost:27017/todoDB` |
| Docker container | `mongodb://mongodb:27017/todoDB` |

Because `mongodb` is the Compose service name.

---

# 7. If you want full MERN Docker YAML

For a complete project:

```text
mern-project/
│
├── compose.yml
│
├── server/
│   ├── package.json
│   ├── server.js
│   └── ...
│
└── client/
    ├── package.json
    └── ...
```

A basic Compose file could eventually be:

```yaml
services:

  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
    build: ./server
    container_name: backend
    ports:
      - "5000:5000"
    depends_on:
      - mongodb
    environment:
      MONGO_URL: mongodb://mongodb:27017/todoDB

volumes:
  mongodb_data:
```

Then your Node code can use:

```js
mongoose.connect(process.env.MONGO_URL);
```

---

# 🧠 For your practical, memorize this

### Normal Docker

```powershell
docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongo
```

### YAML

```yaml
services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

Run it:

```powershell
docker compose up -d
```

Stop it:

```powershell
docker compose down
```

MongoDB URL from your Node app:

```text
mongodb://localhost:27017/todoDB
```

**One-line viva answer:**  
> Docker Compose YAML is useful when we have multiple services because we can define containers, ports, volumes, environment variables, and dependencies in one configuration file.