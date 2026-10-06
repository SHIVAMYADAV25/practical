## 1. What is AI?

**AI = Artificial Intelligence**

> Artificial Intelligence is a branch of computer science that enables machines to perform tasks that normally require human intelligence, such as learning, reasoning, problem-solving, understanding language, and recognizing images.

### Examples

- Face recognition
- Voice assistants
- Recommendation systems
- Chatbots
- Self-driving systems
- Fraud detection

---

# 2. What is Machine Learning?

**ML = Machine Learning**

> Machine Learning is a subset of AI where computers learn patterns from data and use those patterns to make predictions or decisions without being explicitly programmed for every situation.

### Example

Give a model:

```text
1000 Cat Images
1000 Dog Images
       ↓
   ML Algorithm
       ↓
Learns patterns
       ↓
New Image → Cat/Dog
```

---

# 3. What is Deep Learning?

**DL = Deep Learning**

> Deep Learning is a subset of Machine Learning that uses multi-layer neural networks to learn complex patterns from data.

Examples:

- Image recognition
- Speech recognition
- LLMs
- Generative AI
- Computer vision

---

# 4. AI vs ML vs DL

This is **extremely important**.

```text
Artificial Intelligence
        │
        └── Machine Learning
                 │
                 └── Deep Learning
```

### AI

Broad field of intelligent machines.

### ML

Machines learn from data.

### DL

Uses deep neural networks to learn complex patterns.

### Viva answer:

> AI is the broadest concept, Machine Learning is a subset of AI, and Deep Learning is a subset of Machine Learning that uses multi-layer neural networks.

---

# 5. What is Generative AI?

**GenAI = Generative Artificial Intelligence**

> Generative AI is a type of AI that learns patterns from existing data and generates new content such as text, images, audio, music, video, and code.

Examples:

```text
Text       → GPT
Image      → Stable Diffusion
Speech     → TTS models
Music      → Music-generation models
Video      → Video-generation models
Code       → Code-generating LLMs
```

---

# 6. Why do we use Generative AI?

We use GenAI to:

- Generate content
- Automate repetitive creative tasks
- Generate images
- Generate text
- Generate code
- Generate audio
- Generate video
- Create synthetic data
- Assist decision-making
- Improve productivity
- Personalize user experiences

### Simple viva answer:

> We use Generative AI to automatically create new content and assist humans in tasks that involve content generation, creativity, analysis, and automation.

---

# 7. What is the difference between AI and GenAI?

| AI | Generative AI |
|---|---|
| Broad field | Subfield/type of AI |
| Can predict/classify/understand | Specifically focuses on generating new content |
| Face recognition | Generate an image |
| Spam detection | Generate an email |
| Fraud detection | Generate a financial report |

---

# 8. What is a Generative Model?

> A generative model learns patterns or the underlying distribution of data and can generate new samples that resemble the data it learned from.

Examples:

- GAN
- VAE
- Diffusion models
- Autoregressive language models

---

# 9. What is a Discriminative Model?

> A discriminative model focuses on distinguishing between classes or predicting an output from input data.

Example:

```text
Image
 ↓
Model
 ↓
Cat / Dog
```

---

# 10. Generative vs Discriminative
| Generative | Discriminative |
|---|---|
| Generates new data | Predicts/classes data |
| Learns data patterns/distribution | Learns decision boundary/conditional relationship |
| GAN | SVM |
| VAE | Logistic Regression |
| Diffusion | Classification model |
| GPT | Many classifiers |

---

# 11. What is GAN?

**GAN = Generative Adversarial Network**

> GAN is a generative model consisting of two neural networks: a Generator and a Discriminator.

```text
Random Noise
     ↓
 Generator
     ↓
Fake Data
     ↓
Discriminator
     ↓
Real / Fake
```

---

# 12. What is a Generator?

> The Generator creates synthetic data intended to resemble real data.

---

# 13. What is a Discriminator?

> The Discriminator tries to distinguish real data from generated data.

---

# 14. Why is GAN called adversarial?

> Because the Generator and Discriminator have competing objectives. The Generator tries to fool the Discriminator while the Discriminator tries to detect generated samples.

---

# 15. What is Mode Collapse?

> Mode collapse is a GAN training problem where the Generator produces limited varieties of samples instead of diverse outputs.

---

# 16. What is VAE?

**VAE = Variational Autoencoder**

> VAE is a generative model that learns a probabilistic latent representation of data and can generate new samples by sampling from that latent space.

Basic architecture:

```text
Input
 ↓
Encoder
 ↓
Latent Space
 ↓
Decoder
 ↓
Output
```

---

# 17. What is an Autoencoder?

> An Autoencoder is a neural network that learns to compress data into a latent representation and reconstruct the original data.

```text
Input
 ↓
Encoder
 ↓
Latent Representation
 ↓
Decoder
 ↓
Reconstructed Output
```

---
# 18. What is a Diffusion Model?

> A diffusion model is a generative model that learns to generate data by reversing a noise-adding process through iterative denoising.

Simplified:

```text
Random Noise
     ↓
Denoising
     ↓
Denoising
     ↓
Denoising
     ↓
Generated Image
```

---

# 19. What is Stable Diffusion?

> Stable Diffusion is a **latent diffusion model** used primarily for generating images from text prompts.

Your practical uses:

```text
Text Prompt
     ↓
Stable Diffusion
     ↓
Generated Image
```

---

# 20. Is Stable Diffusion a GAN?

> No. Stable Diffusion is a diffusion-based generative model, not a GAN.

---

# 21. What model did you use in your image-generation practical?

> I used the **Stable Diffusion v1.5 pre-trained model** through the Hugging Face Diffusers library.

---

# 22. Why did you use a pre-trained model?

> Training a model like Stable Diffusion from scratch requires huge datasets, significant computational resources, powerful GPUs, and a large amount of time. A pre-trained model allows us to perform inference directly.

---

# 23. What is a Prompt?

> A prompt is a natural-language instruction or description given to a generative AI model to guide its output.

Example:

```text
"A futuristic city at sunset, cyberpunk style"
```

---

# 24. What is an LLM?

**LLM = Large Language Model**

> An LLM is a large neural language model trained on large amounts of text to understand and generate language.

Examples include GPT-family, Gemini, Llama, and Mistral models.

---

# 25. What is GPT?

**GPT = Generative Pre-trained Transformer**

> GPT is a Transformer-based language-model family designed for generating and processing text.

### Why GPT?

For:

- Chatbots
- Story generation
- Text completion
- Summarization
- Code generation
- Question answering

---

# 26. What model would you use for text generation?

> I would use a Large Language Model such as GPT, Gemini, Llama, or Mistral. For the practical specifically mentioned in my syllabus, GPT-3 or GPT-4 can be used.

---

# 27. What is BERT?

**BERT = Bidirectional Encoder Representations from Transformers**

> BERT is a Transformer-based model primarily designed for understanding contextual relationships in language.

It can be used for:

- Text classification
- Question answering
- Information extraction
- Language understanding

---

# 28. GPT vs BERT

| GPT | BERT |
|---|---|
| Generative language model | Encoder-based language model |
| Strongly associated with text generation | Strongly associated with language understanding |
| Autoregressive generation | Bidirectional contextual representations |

---

# 29. What is Transformer?

> Transformer is a neural-network architecture based on attention mechanisms that is highly effective for processing sequential data such as language.

Transformers are the foundation of many modern:

- LLMs
- GPT-type models
- BERT
- Multimodal models

---

# 30. What is Attention?

> Attention allows a neural network to determine which parts of the input are more relevant when processing information.

---

# 31. What is CLIP?

**CLIP = Contrastive Language-Image Pre-training**

> CLIP is a model trained to learn relationships between images and text.

Conceptually:

```text
Text ─────┐
          ├──→ Shared representation
Image ────┘
```

Used for:

- Image-text matching
- Zero-shot image classification
- Image understanding

---

# 32. What is VQ-VAE?

**VQ-VAE = Vector Quantized Variational Autoencoder**

> VQ-VAE is a VAE-based generative model that uses a discrete latent representation through a learned codebook.

---

# 33. What is CycleGAN?

> CycleGAN is a GAN-based image-to-image translation model that can learn transformations between two image domains without requiring paired examples.

Example:

```text
Horse → Zebra
Summer → Winter
```

---

# 34. What is Neural Style Transfer?

> Neural Style Transfer combines the content of one image with the visual style of another image.

```text
Content Image
      +
Style Image
      ↓
Generated Image
```

---

# Model Selection Questions

These are **very important for viva**.

### 35. Which model would you use for text generation?

> LLM / GPT-type model.

### 36. Which model would you use for image generation?

> Stable Diffusion or another diffusion-based image-generation model.

### 37. Which model would you use to generate realistic faces?

> StyleGAN-type GAN models.

### 38. Which model would you use for image-to-image translation?

> CycleGAN can be used.

### 39. Which technology would you use for Text-to-Speech?

> TTS — Text-to-Speech.

### 40. Which technology would you use for Speech-to-Text?

> ASR — Automatic Speech Recognition.

### 41. Give an example of an ASR model.

> Whisper is a well-known speech-recognition model.

### 42. What would you use for music generation?

> A neural music-generation model such as MusicGen.

### 43. What would you use for text-to-video?

> A generative video model designed for text-to-video generation.

---

# 44. How is GenAI used in Healthcare?

> GenAI can assist in medical documentation, summarization, medical education, research, drug discovery, synthetic data generation, and patient communication.

---

# 45. How is GenAI used in Drug Discovery?

> Generative models can generate candidate molecular structures and help researchers explore molecules with desired properties.

---

# 46. How is GenAI used in Finance?

> It can assist with report generation, document analysis, customer support, financial summarization, risk-analysis workflows, and fraud-investigation support.

---

# 47. How is GenAI used in Manufacturing?

> It can assist with product design, engineering, simulations, technical documentation, maintenance support, and supply-chain workflows.

---

# 48. How is GenAI used in Robotics?

> It can help robots understand natural-language instructions, plan tasks, interpret environments, and assist with robot programming and simulation.

---

# 49. How is GenAI used in Automation?

> GenAI can automate tasks involving text, documents, code, images, and natural-language interactions by connecting AI models with APIs, databases, and software workflows.

Example:

```text
Email
 ↓
LLM
 ↓
Understand
 ↓
Generate response
 ↓
API
 ↓
Update system
```

---

# 50. How is GenAI used in Creative Industries?

> It can generate artwork, music, scripts, advertisements, designs, video concepts, and other creative content.

---

# 51. How does GenAI help businesses?

> It can improve productivity, automate repetitive tasks, assist product development, generate marketing content, improve customer support, and help analyze large amounts of information.

---

# 52. Why use Cloud for Generative AI?

> Cloud platforms provide scalable compute, GPUs/accelerators, storage, APIs, deployment infrastructure, and monitoring required for AI applications.

---

# 53. Name the cloud platforms in your syllabus.

> **AWS, Microsoft Azure, and Google Cloud Platform.**

---

# 54. What is AWS?

**AWS = Amazon Web Services**

> AWS is Amazon's cloud-computing platform that provides computing, storage, networking, and AI/ML services.

---

# 55. What is Azure?

**Microsoft Azure**

> Azure is Microsoft's cloud-computing platform that provides infrastructure and AI/ML services.

---

# 56. What is GCP?

**GCP = Google Cloud Platform**

> GCP is Google's cloud-computing platform providing infrastructure and AI/ML services.

---

# 57. What are ethical issues in Generative AI?

Very important from your syllabus.

> Major issues include bias, privacy, copyright, misinformation, deepfakes, consent, security, misuse, and lack of transparency.

---

# 58. What is a Deepfake?

> A deepfake is synthetic or manipulated media generated using AI that can realistically alter or create a person's face, voice, or actions.

---

# 59. What is Hallucination?

> Hallucination occurs when a generative AI system produces information that appears plausible but is incorrect, unsupported, or fabricated.

---

# 60. What is Bias in AI?

> AI bias occurs when an AI system produces systematically unfair or skewed results, often because of biases in training data, model design, or deployment.

---

# Important Full Forms

Learn these **exactly**:

| Short Form | Full Form |
|---|---|
| **AI** | Artificial Intelligence |
| **ML** | Machine Learning |
| **DL** | Deep Learning |
| **GenAI** | Generative Artificial Intelligence |
| **GAN** | Generative Adversarial Network |
| **VAE** | Variational Autoencoder |
| **AE** | Autoencoder |
| **LLM** | Large Language Model |
| **GPT** | Generative Pre-trained Transformer |
| **BERT** | Bidirectional Encoder Representations from Transformers |
| **CLIP** | Contrastive Language-Image Pre-training |
| **VQ-VAE** | Vector Quantized Variational Autoencoder |
| **TTS** | Text-to-Speech |
| **STT** | Speech-to-Text |
| **ASR** | Automatic Speech Recognition |
| **RAG** | Retrieval-Augmented Generation |
| **API** | Application Programming Interface |
| **GPU** | Graphics Processing Unit |
| **CPU** | Central Processing Unit |
| **CUDA** | Compute Unified Device Architecture |
| **NLP** | Natural Language Processing |
| **CNN** | Convolutional Neural Network |
| **RNN** | Recurrent Neural Network |
| **LSTM** | Long Short-Term Memory |
| **RL** | Reinforcement Learning |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **AI** | Artificial Intelligence |
| **AWS** | Amazon Web Services |
| **GCP** | Google Cloud Platform |
| **VAE** | Variational Autoencoder |
| **GAN** | Generative Adversarial Network |
| **SVM** | Support Vector Machine |
| **OCR** | Optical Character Recognition |
| **PDF** | Portable Document Format |

---

# The Most Important Conceptual Chain

If ma'am asks you:

> **"Explain the relationship between all these things."**

Say:

```text
                    AI
                     │
                     ▼
              Machine Learning
                     │
                     ▼
               Deep Learning
                     │
          ┌──────────┴───────────┐
          │                      │
   Discriminative          Generative AI
     Models                      │
                                 │
              ┌──────────────────┼─────────────────┐
              │                  │                 │
             GAN                VAE          Diffusion
              │                                    │
         StyleGAN                            Stable Diffusion
              │                                    │
        Face Generation                       Image Generation
```

And for language:

```text
Generative AI
     ↓
Transformers
     ↓
LLMs
     ↓
GPT / Gemini / Llama / etc.
     ↓
Text Generation / Chatbots / Code
```
