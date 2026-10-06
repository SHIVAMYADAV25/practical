! pip install translate

from translate import Translator

text = input("enter the translator text: ")
lang = input("enter in what language u want to convert : ")

languages = {
    "English": "en",
    "Hindi": "hi",
    "Marathi": "mr",
    "French": "fr",
    "German": "de",
    "Spanish": "es",
    "Japanese": "ja",
    "Chinese": "zh",
    "Tamil": "ta",
    "Telugu": "te",
    "Bengali": "bn"
}

print(languages)
translator = Translator(to_lang=lang)
print(translator.translate(text))

































#language

from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")

langs = {
    "1": ("Hindi", "hi"),
    "2": ("Marathi", "mr"),
    "3": ("Gujarati", "gu"),
    "4": ("French", "fr"),
    "5": ("German", "de"),
    "6": ("Spanish", "es"),
    "7": ("Japanese", "ja"),
    "8": ("Arabic", "ar")
}

for n, (name, code) in langs.items():
    print(n, name)

dest = input("Choose language: ")
text = input("Enter English text: ")

tokenizer.src_lang = "en"
tokens = tokenizer(text, return_tensors="pt")

output = model.generate(
    **tokens,
    forced_bos_token_id=tokenizer.get_lang_id(langs[dest][1])
)

print("Translation:", tokenizer.decode(output[0], skip_special_tokens=True))