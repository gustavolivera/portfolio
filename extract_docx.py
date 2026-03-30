import zipfile
import re

def extract_text_from_docx(docx_path):
    with zipfile.ZipFile(docx_path, 'r') as docx:
        content = docx.read('word/document.xml').decode('utf-8')
        text = re.sub(r'<w:p [^>]*>', '\n', content)
        text = re.sub(r'<[^>]+>', '', text)
        return text.strip()

with open('extracted_resume.txt', 'w', encoding='utf-8') as f:
    f.write(extract_text_from_docx(r'c:\repos\portfolio\.agents\Contexto\curriculoGustavoOliveira.docx'))
print("Extracted successfully!")
