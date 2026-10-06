Yes. Since this is a **Generative AI practical viva**, your examiner can start much more basic than your Stable Diffusion code. They can go from **AI → ML → DL → Neural Networks → Generative AI → GAN/VAE → Transformers → Stable Diffusion → your code → cloud/deployment**.

Here are the different types of questions I would prepare.

## 1. AI Basics

**Q1. What is Artificial Intelligence (AI)?**  
AI is a field of computer science that enables machines to perform tasks that normally require human intelligence, such as learning, reasoning, problem-solving, understanding language, and recognizing images.

**Q2. Give examples of AI.**  
Chatbots, recommendation systems, self-driving systems, face recognition, voice assistants, fraud detection, and generative AI systems.

**Q3. What is Machine Learning?**  
Machine Learning is a subset of AI in which computers learn patterns from data and use those patterns to make predictions or decisions without explicitly programming every rule.

**Q4. What is Deep Learning?**  
Deep Learning is a subset of Machine Learning that uses multi-layer neural networks to learn complex patterns from large amounts of data.

Remember:

```text
Artificial Intelligence
        ↓
Machine Learning
        ↓
Deep Learning
        ↓
Generative AI techniques/models
```

**Q5. AI vs ML?**  
AI is the broader concept of making machines intelligent. ML is one approach to achieving AI by allowing machines to learn from data.

**Q6. ML vs Deep Learning?**  
Traditional ML uses algorithms such as decision trees, SVM, and regression. Deep Learning primarily uses neural networks with many layers and generally benefits from larger datasets and more computation.

---

# 2. Machine Learning Basics

**Q7. What are the main types of Machine Learning?**

Three common types are:

1. **Supervised Learning** — trained using labelled data.
2. **Unsupervised Learning** — finds patterns in unlabelled data.
3. **Reinforcement Learning** — an agent learns through rewards and penalties.

**Q8. What is supervised learning?**

Example:

```text
Input             Label

Cat image    →     Cat
Dog image    →     Dog
```

The correct answer/label is available during training.

**Q9. What is unsupervised learning?**  
The model learns patterns from data without predefined labels.

Example:

```text
Customer Data
      ↓
Clustering
      ↓
Customer Groups
```

**Q10. What is Reinforcement Learning?**  
It is a learning method where an agent interacts with an environment and learns actions based on rewards and penalties.

---

# 3. Neural Network Questions

**Q11. What is an Artificial Neural Network?**  
An ANN is a computational model inspired by biological neural networks. It consists of interconnected artificial neurons that learn patterns from data.

Basic architecture:

```text
Input Layer
     ↓
Hidden Layer
     ↓
Hidden Layer
     ↓
Output Layer
```

**Q12. What is a neuron?**  
A neuron is a basic computational unit of a neural network. It receives inputs, applies weights and bias, and passes the result through an activation function.

Conceptually:

```text
Inputs
  ↓
Weights
  ↓
Weighted Sum + Bias
  ↓
Activation Function
  ↓
Output
```

**Q13. What are weights?**  
Weights are learnable parameters that determine the importance of input features.

**Q14. What is bias?**  
Bias is an additional learnable parameter that allows the model to shift the output independently of the inputs.

**Q15. What is an activation function?**  
An activation function introduces non-linearity into a neural network.

Examples:

- ReLU
- Sigmoid
- Tanh
- Softmax

**Q16. What is ReLU?**

```text
ReLU(x) = max(0, x)
```

Negative values become 0, while positive values remain positive.

---

# 4. Training Questions

**Q17. What is training?**  
Training is the process of adjusting model parameters such as weights and biases so that the model performs better on a task.

**Q18. What is inference?**  
Inference means using an already-trained model to generate predictions or outputs.

This is important for your Stable Diffusion practical.

Your code:

```python
image = pipe(prompt).images[0]
```

is primarily performing **inference**, not training Stable Diffusion.

**Q19. Training vs inference?**

| Training | Inference |
|---|---|
| Model learns | Model is used |
| Updates parameters | Parameters normally remain fixed |
| Usually expensive | Usually cheaper |
| Requires training data | Takes new input |

**Q20. What is an epoch?**  
One epoch means one complete pass through the entire training dataset.

**Q21. What is batch size?**  
Batch size is the number of training samples processed before an update to model parameters.

**Q22. What is learning rate?**  
Learning rate controls how large the parameter updates are during training.

**Q23. What is a loss function?**  
A loss function measures the difference between the model's output and the desired output.

Smaller loss generally means better performance on the training objective.

**Q24. What is an optimizer?**  
An optimizer updates the model's parameters to minimize the loss.

Examples:

```text
SGD
Adam
AdamW
```

---

# 5. Overfitting / Underfitting

These are common viva questions.

**Q25. What is overfitting?**  
Overfitting happens when a model learns the training data too closely and performs poorly on unseen data.

```text
Training performance → Very good
Testing performance  → Poor
```

**Q26. What is underfitting?**  
Underfitting happens when the model has not learned the underlying patterns sufficiently.

```text
Training performance → Poor
Testing performance  → Poor
```

**Q27. How can overfitting be reduced?**

Common techniques include:

- More training data
- Data augmentation
- Regularization
- Dropout
- Early stopping

---

# 6. Generative AI Basics

Now the examiner can enter your actual subject.

**Q28. What is Generative AI?**  
Generative AI is AI that learns patterns from existing data and can generate new content such as text, images, audio, video, music, or code.

**Q29. What can Generative AI generate?**

```text
Text
Images
Audio
Music
Video
Code
3D content
Synthetic data
```

**Q30. Give examples of Generative AI models/technologies.**

Examples include:

- GPT
- GAN
- VAE
- Stable Diffusion
- Diffusion models

**Q31. Traditional AI vs Generative AI?**

Traditional predictive/discriminative AI commonly:

```text
Input → Prediction/Class
```

Generative AI:

```text
Input/Prompt → New Content
```

Example:

```text
Traditional:
Image → "This is a cat"

Generative:
Prompt → Generate a new cat image
```

---

# 7. Generative vs Discriminative Models

This is directly in your syllabus.

**Q32. What is a generative model?**  
A generative model learns patterns/distributions in data and can generate new samples resembling the training data.

**Q33. What is a discriminative model?**  
A discriminative model focuses on predicting labels or distinguishing between classes based on input.

Example:

```text
Image
 ↓
Classifier
 ↓
Cat / Dog
```

**Q34. Give examples.**

Generative:

```text
GAN
VAE
Diffusion models
```

Discriminative:

```text
Logistic Regression
SVM
many classification neural networks
```

---

# 8. GAN — Very Important

Your syllabus has a full section on GANs.

**Q35. What does GAN stand for?**

> Generative Adversarial Network.

**Q36. Who are the two main components of GAN?**

```text
Generator
+
Discriminator
```

**Q37. What does the Generator do?**  
It generates synthetic/fake samples intended to resemble real data.

**Q38. What does the Discriminator do?**  
It attempts to distinguish real samples from generated samples.

Think:

```text
Random Noise
     ↓
 Generator
     ↓
 Fake Image
     ↓
Discriminator
     ↓
Real / Fake
```

**Q39. Why is it called "adversarial"?**  
Because the Generator and Discriminator are trained with competing objectives.

**Q40. What is the goal of the Generator?**

> To generate samples realistic enough to fool the Discriminator.

**Q41. What is the goal of the Discriminator?**

> To correctly distinguish real data from generated data.

**Q42. What are problems with GANs?**

Possible problems include:

- Training instability
- Mode collapse
- Difficult convergence
- Sensitivity to hyperparameters

**Q43. What is mode collapse?**  
Mode collapse occurs when the Generator repeatedly produces a limited variety of outputs instead of representing the full diversity of the data distribution.

---

# 9. Autoencoder and VAE

**Q44. What is an Autoencoder?**  
An Autoencoder is a neural network that learns to encode input into a compressed representation and reconstruct it.

```text
Input
 ↓
Encoder
 ↓
Latent Representation
 ↓
Decoder
 ↓
Reconstructed Input
```

**Q45. What does Encoder do?**

> Converts input into a lower-dimensional representation.

**Q46. What does Decoder do?**

> Reconstructs data from the encoded representation.

**Q47. What is latent space?**  
Latent space is a learned compressed representation containing important features/patterns of the data.

**Q48. What is VAE?**

> VAE stands for Variational Autoencoder. It is a probabilistic generative model based on an encoder-decoder architecture and a structured latent distribution.

Simple diagram:

```text
Input
  ↓
Encoder
  ↓
Latent Distribution
  ↓
Sampling
  ↓
Decoder
  ↓
Generated/Reconstructed Data
```

**Q49. Autoencoder vs VAE?**  
A normal Autoencoder mainly learns compressed representations and reconstruction. A VAE learns a probabilistic latent space that allows new samples to be generated.

---

# 10. Diffusion Models

Very important for the code you gave me.

**Q50. What is a diffusion model?**  
A diffusion model is a generative model that learns to generate data through a denoising process.

Simplified:

```text
Random Noise
    ↓
Denoise
    ↓
Denoise
    ↓
Denoise
    ↓
Generated Image
```

**Q51. What is Stable Diffusion?**

> Stable Diffusion is a latent diffusion-based generative model commonly used for text-to-image generation.

**Q52. Is Stable Diffusion a GAN?**

> No.

GAN:

```text
Generator ↔ Discriminator
```

Stable Diffusion:

```text
Noise → iterative denoising → Image
```

**Q53. Why is it called Stable Diffusion?**

The important technical point is that Stable Diffusion performs the diffusion process primarily in a **compressed latent space**, rather than directly operating on full-resolution pixels throughout the denoising process.

---

# 11. Your Practical Code Viva

Your examiner can literally point at any line:

```python
from diffusers import StableDiffusionPipeline
import torch
```

**Q54. What is `diffusers`?**  
A Hugging Face library that provides implementations and pipelines for diffusion models.

**Q55. What is `StableDiffusionPipeline`?**  
It provides a convenient pipeline containing the components necessary to perform Stable Diffusion inference.

**Q56. What is PyTorch?**  
PyTorch is an open-source machine-learning/deep-learning framework used for building and running neural networks.

---

### They point here:

```python
StableDiffusionPipeline.from_pretrained(...)
```

**Q57. What does `from_pretrained()` mean?**

> It loads a model whose parameters have already been trained.

**Q58. Why are you using a pretrained model?**  
Because training Stable Diffusion from scratch requires large datasets, powerful hardware, substantial time, and high computational cost.

---

### They point here:

```python
torch_dtype=torch.float16
```

**Q59. What is `float16`?**

> A 16-bit floating-point numerical representation.

**Q60. Why use float16?**

> It reduces memory usage and can improve GPU inference speed on supported hardware.

---

### They point here:

```python
pipe.to("cuda")
```

**Q61. What is CUDA?**

> CUDA is NVIDIA's parallel computing platform that enables software such as PyTorch to perform computation using NVIDIA GPUs.

**Q62. Why GPU instead of CPU?**

> Neural networks involve large numbers of matrix/tensor operations that GPUs can execute efficiently in parallel.

**Q63. How do you check whether CUDA is available?**

```python
torch.cuda.is_available()
```

---

### They point here:

```python
prompt = "A futuristic city..."
```

**Q64. What is a prompt?**

> A prompt is an input instruction or description given to a generative model to guide the generated output.

---

### They point here:

```python
pipe(prompt)
```

**Q65. What happens here?**

The prompt is passed to the Stable Diffusion pipeline, which uses its model components to perform text-conditioned image generation.

---

### They point here:

```python
.images[0]
```

**Q66. Why `[0]`?**

> It accesses the first generated image from the returned image collection.

---

### They point here:

```python
image.save("output.png")
```

**Q67. What happens here?**

> The generated image is saved as a PNG file named `output.png`.

---

# 12. Transformer / GPT Questions

Your first listed syllabus practical mentions GPT-3/4, so prepare these too.

**Q68. What does GPT stand for?**

> Generative Pre-trained Transformer.

Break it down:

```text
Generative → generates content
Pre-trained → trained beforehand
Transformer → underlying neural-network architecture
```

**Q69. What is a Transformer?**  
A Transformer is a neural-network architecture designed to process sequences using mechanisms such as attention.

**Q70. What is attention?**  
Attention allows a model to determine which parts of the input are most relevant when processing information or generating an output.

**Q71. What is self-attention?**  
Self-attention allows elements of a sequence to consider other elements in the same sequence when constructing contextual representations.

**Q72. What is a token?**  
A token is a unit of text processed by a language model. A token may represent a word, part of a word, punctuation, or another text unit depending on the tokenizer.

**Q73. What is an LLM?**

> LLM stands for Large Language Model.

It is a neural language model trained on large amounts of text and typically containing many parameters.

---

# 13. BERT

BERT is explicitly in your syllabus.

**Q74. What does BERT stand for?**

> Bidirectional Encoder Representations from Transformers.

**Q75. What is BERT used for?**  
BERT is primarily used for natural-language understanding tasks such as classification, question answering, and extracting contextual representations.

**Q76. GPT vs BERT?**

Simple exam answer:

| GPT | BERT |
|---|---|
| Strongly associated with text generation | Strongly associated with language understanding |
| Autoregressive models | Encoder-based, bidirectional context |
| Predicts/generates tokens sequentially | Builds contextual representations |

---

# 14. CLIP

Your Practical 6 mentions CLIP.

**Q77. What is CLIP?**

> CLIP stands for Contrastive Language-Image Pre-training.

It learns relationships between text and images.

Conceptually:

```text
Text ───┐
        ├──→ Related representations
Image ──┘
```

**Q78. Why is CLIP useful?**

> It can connect natural-language descriptions with visual concepts, enabling tasks such as image-text matching and zero-shot image classification.

---

# 15. VQ-VAE

**Q79. What is VQ-VAE?**

> Vector Quantized Variational Autoencoder.

It uses a discrete latent representation/codebook instead of a purely continuous latent representation.

You probably don't need deep mathematics unless your teacher specifically focuses on it.

---

# 16. Style Transfer

Your Practical 7.

**Q80. What is Neural Style Transfer?**  
Neural Style Transfer creates an image that combines the **content** of one image with the visual **style** of another.

```text
Content Image ──┐
                ├→ Generated Image
Style Image ────┘
```

Example:

```text
Your photo
+
Painting style
=
Stylized photo
```

---

# 17. TTS

Practical 3.

**Q81. What does TTS stand for?**

> Text-to-Speech.

**Q82. What does TTS do?**

```text
Text
 ↓
TTS Model
 ↓
Speech/Audio
```

It converts written text into synthesized speech.

---

# 18. Deepfake

Practical 5.

**Q83. What is a deepfake?**  
A deepfake is synthetic or manipulated media generated using AI/deep-learning techniques to realistically alter or generate a person's appearance, voice, or actions.

**Q84. What are risks of deepfakes?**

- Misinformation
- Fraud
- Impersonation
- Privacy violations
- Non-consensual content
- Political manipulation

**Q85. How can deepfakes be detected?**  
Detection approaches can analyze inconsistencies or learned patterns in facial features, temporal behavior, audio, lighting, compression artifacts, or model-generated signals.

---

# 19. Data Augmentation

Practical 10.

**Q86. What is Data Augmentation?**

> Data augmentation means increasing the diversity/size of a training dataset by creating modified or synthetic examples.

Image examples:

```text
Original Image
     ↓
Rotate
Flip
Crop
Brightness adjustment
etc.
```

Generative AI can also create synthetic samples.

**Q87. Why use data augmentation?**

> To increase training-data diversity, reduce overfitting, and potentially improve model generalization.

**Q88. What is class imbalance?**

Example:

```text
Class A → 9,000 samples
Class B → 1,000 samples
```

One class has substantially more examples than another.

Synthetic data can sometimes help increase examples of the minority class, although generated data must be validated carefully.

---

# 20. Cloud Questions

Unit V contains AWS, Azure and Google Cloud.

**Q89. Why deploy AI models to cloud platforms?**

Because cloud platforms can provide:

- GPUs/accelerators
- Scalable compute
- Storage
- APIs
- Deployment infrastructure
- Monitoring

**Q90. Name cloud platforms used for AI.**

> AWS, Microsoft Azure and Google Cloud.

**Q91. What does deployment mean?**

> Deployment means making a trained model available in an environment where applications or users can use it for inference.

A common architecture is:

```text
User
 ↓
Application
 ↓
API
 ↓
AI Model
 ↓
Prediction / Generated Content
```

---

# 21. Ethical Questions

Your syllabus repeatedly mentions ethics, so these are highly likely.

**Q92. What are ethical issues with Generative AI?**

Important ones:

- Bias
- Copyright/IP concerns
- Misinformation
- Deepfakes
- Privacy
- Harmful content
- Lack of transparency
- Misuse
- Data provenance/consent

**Q93. What is AI bias?**  
AI bias occurs when a system produces systematically unfair or skewed outcomes, often due to training data, modeling choices, evaluation, or deployment context.

**Q94. Can AI-generated content cause copyright problems?**

> Yes. Training-data provenance, reproduction of protected material, ownership, licensing, and use of generated outputs can raise copyright and intellectual-property questions.

---

# 22. Examiner's "Trick" Questions

These are especially worth preparing.

**Q95. Is ChatGPT a search engine?**

> No. ChatGPT is an AI system built around language models. It can use search tools in some configurations, but a language model itself is not a search engine.

**Q96. Does AI think exactly like a human?**

> No. AI systems process information using learned computational patterns; that should not be equated with human cognition or consciousness.

**Q97. Does Generative AI simply copy its training data?**

> Not normally. It learns statistical patterns from training data and generates outputs from those learned patterns, although models can sometimes reproduce or closely resemble training examples.

**Q98. Does Stable Diffusion search Google for images when generating?**

> No. Normal Stable Diffusion inference generates an image using its learned model parameters; it does not need to search Google for an image.

**Q99. Is generated output always correct?**

> No. Generative AI can produce inaccurate, biased, unrealistic, or misleading outputs.

**Q100. What is hallucination?**

> A hallucination is when a generative AI system produces information that appears plausible but is incorrect, unsupported, or fabricated.

---

# 23. Rapid-Fire Questions

Know these without thinking:

| Question | Answer |
|---|---|
| AI? | Artificial Intelligence |
| ML? | Machine Learning |
| DL? | Deep Learning |
| ANN? | Artificial Neural Network |
| GAN? | Generative Adversarial Network |
| VAE? | Variational Autoencoder |
| GPT? | Generative Pre-trained Transformer |
| BERT? | Bidirectional Encoder Representations from Transformers |
| CLIP? | Contrastive Language-Image Pre-training |
| TTS? | Text-to-Speech |
| GPU? | Graphics Processing Unit |
| CUDA? | NVIDIA parallel-computing platform/API ecosystem |
| Epoch? | One complete pass through training data |
| Loss? | Measure of model error/objective |
| Optimizer? | Updates model parameters |
| Prompt? | Input/instruction to a generative model |
| Token? | Unit processed by a language model |
| Inference? | Using a trained model |
| Training? | Learning model parameters |
| Dataset? | Collection of data |
| Latent space? | Learned internal representation |
| Generator? | Generates synthetic samples |
| Discriminator? | Distinguishes real from generated samples |
| Diffusion? | Noise/denoising-based generative approach |
| Stable Diffusion? | Latent diffusion text-to-image model |
| PyTorch? | Deep-learning framework |
| Hugging Face? | AI/ML platform and open-source ecosystem |
| `pip`? | Python package installer |
| `float16`? | 16-bit floating-point format |
| API? | Application Programming Interface |

One correction to keep firmly in mind for tomorrow: **your syllabus lists “Creating Images with GANs” and separately text-to-image work. Stable Diffusion is not a GAN.** If the examiner asks which model your code uses, say **“a pre-trained latent diffusion model for text-to-image generation.”**