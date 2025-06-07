<template>
    <div class="upload-popup popup">
      <div class="upload-popup__content">
        <p class="upload-popup__title">Добавить вопросы</p>
        <label for="subjectName" class="upload">
          Введите название блока вопросов:
          <input v-model="subjectName" type="text" class="upload__input" placeholder="Программирование" />
          <div class="upload__image">
            <input type="file" @change="handleFileUpload" id="fileInput" style="display:none" />
            <div class="upload-container upload__image1 image" @click="triggerFileInput">
                <p class="upload-text">Загрузить файлы</p>
                <p class="file-formats">В формате .txt, .doc</p>
            </div>
            <div class="upload-container upload__image2 image" @click="triggerFileInput">
                <p class="upload-text">Загрузить фото</p>
                <p class="file-formats">В формате .jpg</p>
            </div>
          </div>
        </label>

        <div v-if="isUploading" class="loader"></div>

        <button class="close-btn btn" @click="$emit('close')">
          <svg class="close-btn__icon" width="20" height="20" viewBox="0 0 24 24">
            <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="black"/>
          </svg>
        </button>
        <div class="upload-popup__buttons">
          <button class="upload__btn btn" @click="uploadToServer" :disabled="isUploading">Загрузить в формат QuizAI</button>
          <button class="upload__btn-alt btn" :disabled="isUploading">Загрузить в формат самопроверки</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      subjectName: '',
      fileData: null,
      jsonData: null,
      isUploading: false // Флаг загрузки
    };
  },
methods: {
    triggerFileInput() {
      document.getElementById('fileInput').click();
    },
    handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && (file.type === "application/json" ||
               file.type === "application/msword" ||
               file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
               file.type === "text/plain")) {
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (file.type === "application/json") {
        try {
          this.jsonData = JSON.parse(e.target.result);

        } catch (err) {
          alert("Ошибка: неверный JSON-файл.");
        }
      } else {
        this.fileData = file;
      }
    };

    if (file.type === "text/plain") {
      reader.readAsText(file);
    } else {
      this.fileData = file;
    }
  } else {
    alert('Пожалуйста, загрузите JSON, DOC, DOCX или TXT файл.');
  }
},
async uploadToServer() {
  if (this.subjectName && this.fileData) {
    try {
      this.isUploading = true;

      const formData = new FormData();
      formData.append("file", this.fileData, this.fileData.name);
      formData.append("language", this.subjectName);

      const response = await fetch("https://t-prepai.onrender.com/process_test", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('uploadedJsonData', JSON.stringify(result));
        this.jsonData = result;

        // Вызываем emit только один раз после успешной загрузки
        this.$emit('add-subject', this.subjectName, this.jsonData);
        this.$emit('close');
        alert("Загрузка успешна! Данные сохранены.");
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Ошибка на сервере");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Ошибка при отправке данных");
    } finally {
      this.isUploading = false;
    }
  } else {
    alert("Введите название блока и загрузите файл!");
  }
}

  },
};
</script>
  
  
  <style lang="less">
  .upload-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    &__title{
        font-family: @font1;
        font-size: 30px;
    }
    &__buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 60px;
        
    }
 &__content {
    position: relative; 
    background: white;
    padding: 20px;
    border-radius: 5px;
   text-align: center;
  }
  .upload {
    display: flex;
    flex-direction: column;
    font-family: @font2;
    text-align: left;
    ::placeholder{
        font-family: @font3;
    }
    &__input {
        width: 75%;
        padding-top: 5px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    &__image {
        display: flex;
        justify-content: flex-start; 
        align-items: center; 
        margin-top: 10px;
        gap: 50px;
    }
    &__image1{
        cursor: pointer;
    }
    &__image2{
        cursor: pointer;
    }
    &__btn{
        margin-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        padding: 12px 37px;

    }
    &__btn-alt{
        margin-top: 20px;
        background-color: @white;
        border:2px solid black;
        &:hover {
          background-color: @black;
          color: @white;
          fill:@black;
  }
    }
}
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px auto;
  animation: spin 1s linear infinite;
}
.upload-container {
    width: 200px;
    height: 100px;
    border: 2px dashed #999;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #f5f5f5;
    text-align: center;
    padding: 20px;
    margin: 20px;
}

.upload-container:hover {
    border-color: #0066cc;
    background-color: #e6f3ff;
}

.upload-text {
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
}

.file-formats {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #666;
}

.upload-container::before {
    content: "⬆";
    font-size: 24px;
    color: #999;
    margin-bottom: 10px;
}

.upload-container:hover::before {
    color: #0066cc;
}
.upload__image2 .upload-text {
    color: #2c3e50; /* Пример изменения цвета текста */
}

.upload__image2::before {
    content: "📷"; /* Иконка камеры вместо стрелки */
    font-size: 28px;
}

.upload__image2:hover {
    border-color: #27ae60; /* Зеленый акцент для фото */
    background-color: #e8f5e9;
}

.upload__image2:hover::before {
    filter: brightness(1.2);
}
}
</style>
  