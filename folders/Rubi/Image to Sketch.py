! pip install opencv-python

import cv2
from google.colab.patches import cv2_imshow

img = cv2.imread("mountain.png")

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

blur = cv2.GaussianBlur(255 - gray, (21, 21), 0)

sketch = cv2.divide(gray, 255 - blur, scale=256)

cv2_imshow(sketch)
