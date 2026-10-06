Yes. **GAN, VAE, BERT, GPT, Stable Diffusion, CLIP, CycleGAN** are important, but your syllabus has several other concepts that can appear in viva.

For your **MCCSCT410**, I would cover these remaining areas too:

# 1. Diffusion Models

This is especially important because your practical uses Stable Diffusion.

### What is a diffusion model?

> A diffusion model is a generative model that learns to generate data by gradually removing noise from a noisy representation.

```text
Noise
  ↓
Denoising
  ↓
Denoising
  ↓
Denoising
  ↓
Generated Image
```

### Important terms

- Noise
- Denoising
- Diffusion process
- Reverse diffusion
- Latent space
- Latent diffusion

---

#  2. Stable Diffusion

Know these:

### What is Stable Diffusion?

> A latent diffusion-based generative model used mainly for text-to-image generation.

### What does it take?

> Text prompt.

### What does it produce?

> Image.

### Is it GAN?

> No.

### Why "latent"?

> Much of the diffusion process is performed in a compressed latent representation rather than directly at full image resolution.

### What library did you use?

> Hugging Face Diffusers.

---

# 3. Autoencoder

Don't only learn VAE.

### What is Autoencoder?

> A neural network that learns to encode data into a compact representation and then reconstruct it.

```text
Input
 ↓
Encoder
 ↓
Latent Representation
 ↓
Decoder
 ↓
Output
```

### Two important parts:

- Encoder
- Decoder

---

# 4. Latent Space

This is **very likely to be asked** if you discuss VAE or diffusion.

### What is latent space?

> Latent space is a learned internal representation in which important features of the original data are represented in a more compact form.

Simple example:

```text
Image
 ↓
Encoder
 ↓
Latent Representation
```

The model works with the representation instead of directly using every original pixel.

---

#  5. Transformer
Your syllabus mentions BERT and GPT, so Transformer is important.

### What is Transformer?

> Transformer is a neural-network architecture based on attention mechanisms and is widely used for processing and generating sequential data, especially language.

### Why is it important?

Modern:

- GPT
- BERT
- LLMs
- Many multimodal models

are based on Transformer architectures or their descendants.

---

# 6. Attention Mechanism

### What is Attention?

> Attention allows a model to focus more on relevant parts of the input when processing information.

Example:

```text
"The cat sat on the mat because it was tired."
```

The model needs to understand what **"it"** refers to from the surrounding context.

Attention helps the model consider relevant relationships.

---

# 7. NLP

**NLP = Natural Language Processing**

> NLP is the field of AI concerned with processing and understanding human language.

Applications:

- Chatbots
- Translation
- Sentiment analysis
- Text summarization
- Question answering
- Text generation

---

# 8. LLM

**LLM = Large Language Model**

### What is it?

> An LLM is a large neural language model trained on large amounts of text to understand and generate human language.

Examples:

- GPT
- Gemini
- Llama
- Mistral

---

# 9. Prompt Engineering

This isn't explicitly a separate heading in your syllabus, but it is highly relevant to your practical.

### What is prompt engineering?

> Prompt engineering is the process of designing effective instructions/prompts to guide a generative AI model toward the desired output.

Example:

Bad:

```text
city
```

Better:

```text
A futuristic city at sunset, cyberpunk style,
neon lights, detailed architecture
```

---

# 10. Embeddings

Especially useful if your examiner asks modern GenAI questions.

### What is an embedding?

> An embedding is a numerical vector representation of data such as text, images, or other content that captures semantic relationships.

Example:

```text
"cat"
   ↓
[0.21, -0.45, 0.73, ...]
```

Similar concepts tend to have related representations.

---

# 11. RAG

**RAG = Retrieval-Augmented Generation**

This is a **very useful modern GenAI concept**.

### What is RAG?

> RAG combines information retrieval with a generative language model so that the model can use relevant external information when generating an answer.

```text
User Question
      ↓
Retrieve Documents
      ↓
Relevant Information
      ↓
LLM
      ↓
Answer
```

### Why use RAG?

> To provide answers based on specific/private/current knowledge instead of relying only on the model's learned parameters.

Example:

College PDF → RAG → Ask question → Answer from PDF.

---

#  12. Hallucination

### What is AI hallucination?

> When a generative AI model produces information that appears believable but is incorrect or unsupported.

Example:

```text
User: Who invented XYZ?
AI: Gives a confident but false answer.
```

---

#  13. Fine-Tuning

### What is fine-tuning?

> Fine-tuning is adapting a pre-trained model by training it further on a specific dataset or task.

```text
Pre-trained Model
       ↓
Task-specific data
       ↓
Fine-tuning
       ↓
Specialized Model
```

Example:

A general language model → fine-tuned for a specific domain.

---

#  14. Transfer Learning

### What is Transfer Learning?

> Transfer learning uses knowledge learned from one task or dataset as a starting point for another related task.

This reduces the need to train everything from scratch.

---
#  15. Pre-trained Model

Your practical directly uses this.

### What is a pre-trained model?

> A model that has already been trained on a large dataset and can be used directly or adapted for a particular task.

Your code:

```python
StableDiffusionPipeline.from_pretrained(...)
```

---

# 16. Training vs Inference

Very important.

### Training

> Model learns its parameters from data.

### Inference

> A trained model is used to produce an output for new input.

Your Stable Diffusion practical is primarily:

**Inference.**

---

# 17. Parameters

### What are model parameters?

> Parameters are values learned during training, such as weights and biases, that determine how the model processes inputs.

Large models can contain millions or billions of parameters.

---

# 18. Hyperparameters

### What are hyperparameters?

> Hyperparameters are settings chosen before or around training rather than learned directly from the training data.

Examples:

- Learning rate
- Batch size
- Number of epochs
- Model architecture choices

For generation, you may also encounter settings such as:

- Number of inference steps
- Guidance scale
- Image dimensions
- Seed

---

#  19. Temperature

Especially for text-generation viva.

### What is temperature?

> Temperature controls the randomness of token selection during text generation.

Conceptually:

```text
Low temperature
→ More predictable

High temperature
→ More diverse/random
```

---

#20. Token

### What is a token?

> A token is a unit of text processed by a language model. It can be a word, part of a word, punctuation, or another tokenization unit.

Example:

```text
"Generative AI"
```

may be split into multiple tokens depending on the tokenizer.

---

# 21. Tokenization

### What is tokenization?

> Tokenization converts text into tokens that can be processed by a language model.

```text
Text
 ↓
Tokenizer
 ↓
Tokens
 ↓
Model
```

---

# 22. Context Window

### What is context window?

> The context window is the amount of tokenized information a model can consider as its input/context at a time.

---

# 23. Multimodal AI

### What is multimodal AI?

> Multimodal AI can work with multiple types of data, such as text, images, audio, and video.

Example:

```text
Text + Image
      ↓
AI Model
      ↓
Answer
```

This is an important modern GenAI concept.

---

# 24. Synthetic Data

### What is synthetic data?

> Synthetic data is artificially generated data designed to resemble real-world data.

Uses:

- ML training
- Data augmentation
- Privacy-sensitive research
- Testing
- Simulation

---

# 25. Data Augmentation

Your **Practical 10** directly covers this.

### What is it?

> Data augmentation increases the diversity of training data by creating modified or synthetic examples.

Traditional image augmentation:

```text
Original
 ↓
Flip
Rotate
Crop
Resize
```

Generative augmentation:

```text
Original Dataset
 ↓
Generative Model
 ↓
Synthetic Samples
 ↓
Larger Dataset
```

---

# 26. Deepfake

Your Practical 5.

### What is deepfake?

> AI-generated or manipulated media that realistically alters or synthesizes a person's face, voice, or actions.

### Risks?

- Fraud
- Misinformation
- Impersonation
- Privacy violations
- Non-consensual content

---

# 27. Neural Style Transfer

Your Practical 7.

```text
Content Image
      +
Style Image
      ↓
Neural Style Transfer
      ↓
Stylized Image
```

---

# 28. AI Agents

Not a major explicit syllabus heading, but very relevant to **automation**.

### What is an AI agent?

> An AI agent is a system that can use an AI model to understand a goal, decide actions, and interact with tools or external systems to accomplish tasks.

Example:

```text
User Request
     ↓
AI Agent
     ↓
Reason/Plan
     ↓
Tool/API
     ↓
Database
     ↓
Action
```

For example, an agent could read an email, check an order database, and prepare a response.

---

# 29. AI Automation

### How can GenAI automate tasks?

> By combining an LLM or other generative model with APIs, databases, tools, and business workflows.

Example:

```text
Email
 ↓
LLM
 ↓
Understand request
 ↓
Call API
 ↓
Update database
 ↓
Generate response
```

---

# 30. AI Ethics

Your syllabus specifically mentions ethics.

Know these:

### Bias

Unfair or skewed model behavior.

### Privacy

Protecting sensitive user/data information.

### Copyright

Questions around training data and generated content.

### Misinformation

AI-generated false or misleading content.

### Deepfakes

Synthetic media used deceptively.

### Transparency

Understanding how and why AI systems produce outputs.

---

# 31. Responsible AI

### What is Responsible AI?

> Responsible AI means developing and using AI systems in ways that emphasize safety, fairness, privacy, transparency, accountability, and appropriate human oversight.

---

# 32. Model Evaluation

### Why evaluate a generative model?

> To determine whether its generated outputs are useful, realistic, relevant, safe, and appropriate for the intended task.

Depending on the model/task, different metrics can be used.

For example:

- Image quality
- Text quality
- Similarity
- Accuracy
- Human evaluation

---

# 33. Cloud Deployment

Your Unit V.

Know:

```text
AWS
Azure
Google Cloud
```

### Why cloud?

> Scalability, GPUs, storage, APIs, deployment, monitoring, and easier access to computing resources.

---

# Complete MCCSCT410 Concept Map

If you understand this, you have covered most of the important theory:

```text
                         AI
                         │
                  Machine Learning
                         │
                   Deep Learning
                         │
                  ┌──────┴───────┐
                  │              │
           Discriminative    Generative AI
                  │              │
             Classification      │
                                 │
          ┌──────────┬───────────┼──────────┐
          │          │           │          │
         GAN        VAE       Diffusion    LLM
          │          │           │          │
      StyleGAN    Latent     Stable      GPT
      CycleGAN    Space      Diffusion   Gemini
          │                      │
     Image Tasks             Image Tasks
                                          
        Other Important Concepts
                 │
    ┌────────────┼─────────────┐
    │            │             │
  BERT         CLIP          RAG
    │            │             │
Language      Text+Image    Knowledge
Understanding  Relationship  Retrieval
```