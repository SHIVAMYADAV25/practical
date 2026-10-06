!pip install -q transformers pillow

from transformers import pipeline
from PIL import Image

captioner = pipeline(
    "image-text-to-text",
    model="Salesforce/blip-image-captioning-base"
)

image = Image.open("mountain.png")

result = captioner(
    images=image,
    text="Describe this image."
)

print(result)
























#Image to Text

from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image

processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-large")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-large")

image = Image.open("scenery.png").convert("RGB")
inputs = processor(images=image, return_tensors="pt")

output = model.generate(**inputs)

print("Description:", processor.decode(output[0], skip_special_tokens=True))