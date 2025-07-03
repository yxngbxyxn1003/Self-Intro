// AI Profile Generator using Chrome's Prompt API

class AIProfileGenerator {
  constructor() {
    this.session = null;
    this.isAvailable = false;
    this.init();
  }

  async init() {
    // Check if the Prompt API is available
    if (!window.LanguageModel) {
      console.log('Prompt API is not available in this browser');
      this.showNotAvailableMessage();
      return;
    }

    try {
      const availability = await LanguageModel.availability();
      console.log('AI Model availability:', availability);
      
      if (availability === 'unavailable') {
        this.showNotAvailableMessage();
        return;
      }

      this.isAvailable = true;
      this.setupEventListeners();

      // Create session if model is available
      if (availability === 'available') {
        await this.createSession();
      } else if (availability === 'downloadable') {
        // Show download progress if needed
        this.showDownloadMessage();
      }
    } catch (error) {
      console.error('Error initializing AI:', error);
      this.showErrorMessage();
    }
  }

  async createSession() {
    try {
      this.session = await LanguageModel.create({
        initialPrompts: [{
          role: "system",
          content: "You are a creative assistant that generates fun and engaging profile bios in Korean. Keep them short (2-3 sentences), playful, and interesting. Include emojis when appropriate."
        }],
        monitor(m) {
          m.addEventListener("downloadprogress", (e) => {
            console.log(`Model download progress: ${Math.round(e.loaded * 100)}%`);
            const progressElement = document.querySelector('.ai-progress');
            if (progressElement) {
              progressElement.textContent = `AI 모델 다운로드 중... ${Math.round(e.loaded * 100)}%`;
            }
          });
        }
      });
      console.log('AI session created successfully');
    } catch (error) {
      console.error('Error creating session:', error);
      this.showErrorMessage();
    }
  }

  setupEventListeners() {
    const editButton = document.querySelector('.profile__btn button');
    if (editButton) {
      editButton.addEventListener('click', () => this.handleEditButtonClick());
    }
  }

  async handleEditButtonClick() {
    if (!this.isAvailable) {
      this.showNotAvailableMessage();
      return;
    }

    if (!this.session) {
      await this.createSession();
      if (!this.session) return;
    }

    // Show loading state
    this.showLoadingState();

    try {
      // Get current profile info
      const currentName = document.querySelector('.profile__name').textContent;
      const currentBio = document.querySelector('.profile__info').innerHTML.replace(/<br\s*\/?>/gi, ' ');

      // Generate new bio using AI
      const prompt = `현재 이름: ${currentName}
현재 소개: ${currentBio}

위 정보를 바탕으로 재미있고 창의적인 새로운 프로필 소개글을 만들어주세요. 
개발자나 프로그래머의 특성을 살려서 유머러스하게 작성해주세요.
이모지를 적절히 사용하고, 2-3문장으로 짧게 작성해주세요.`;

      const result = await this.session.prompt(prompt);
      
      // Apply the new bio with animation
      this.applyNewBio(result);
      
    } catch (error) {
      console.error('Error generating profile:', error);
      this.showErrorMessage();
    } finally {
      this.hideLoadingState();
    }
  }

  applyNewBio(newBio) {
    const bioElement = document.querySelector('.profile__info');
    
    // Add fade-out animation
    bioElement.style.transition = 'opacity 0.3s ease-out';
    bioElement.style.opacity = '0';
    
    setTimeout(() => {
      // Update the bio text with line breaks
      bioElement.innerHTML = newBio.replace(/\n/g, '<br />');
      
      // Fade in
      bioElement.style.opacity = '1';
      
      // Add a subtle highlight effect
      bioElement.classList.add('bio-updated');
      setTimeout(() => {
        bioElement.classList.remove('bio-updated');
      }, 2000);
    }, 300);
  }

  showLoadingState() {
    const button = document.querySelector('.profile__btn button');
    button.textContent = 'AI가 생각중...';
    button.disabled = true;
    button.classList.add('loading');
  }

  hideLoadingState() {
    const button = document.querySelector('.profile__btn button');
    button.textContent = '프로필 편집';
    button.disabled = false;
    button.classList.remove('loading');
  }

  showNotAvailableMessage() {
    const button = document.querySelector('.profile__btn button');
    button.textContent = 'AI 사용 불가';
    button.disabled = true;
    button.title = 'Chrome 138+ 버전과 Gemini Nano가 필요합니다';
  }

  showDownloadMessage() {
    const button = document.querySelector('.profile__btn button');
    button.innerHTML = '<span class="ai-progress">AI 모델 준비중...</span>';
  }

  showErrorMessage() {
    alert('AI 프로필 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AIProfileGenerator();
});