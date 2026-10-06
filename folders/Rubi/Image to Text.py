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
