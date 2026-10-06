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
