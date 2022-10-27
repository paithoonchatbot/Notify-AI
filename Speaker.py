import win32com.client
from expertai.nlapi.cloud.client import ExpertAiClient

client = ExpertAiClient()
speaker=win32com.client.Dispatch("SAPI.SpVoice")
while 1:
    print("Input Word :")
    s=input()
    speaker.Speak(s)
    
"""Procedure in Crate
*1. pip install pypiwin32
*2. Write in code above
*3.Run with type: python Speaker.py
*4.Input Word : occurs
*5. Type word, Sentense, or Paragraph
"""



