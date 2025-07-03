# Pirostagram - Instagram Clone Project

Instagram 클론을 통해 HTML/CSS를 학습하는 프로젝트입니다.

## 프로젝트 구조

- **메인 파일**: `pirostagram.html`, `pirostagram.css` - 실제 작업이 진행되는 파일
- **단계별 폴더**: 각 단계별 완성된 상태를 확인할 수 있는 참고 자료
- **example 폴더**: 완성된 전체 예제

## Ref

https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element

## 단계별 Emmet 약어

### 1. Layout - 기본 구조

```
header+main>(.profile+.story+.statistics+.toolbar+.content)+footer
```

### 2. Reset CSS

```html
<link rel="stylesheet" href="./reset.css" />
```

### 3. Header

```
header>.header__container>.header__icon>i.fas.fa-cog^.header__username{pirogramming}+.header__icon>i.fas.fa-user-plus
```

### 4. Profile

```
.profile>(.profile__top>.profile__img>img[src="https://picsum.photos/300/500" alt=""]^.profile__right>.profile__username{pirogramming}+.profile__btn>button{프로필 편집})^.profile__bottom>span.profile__name{김피로}+br+span.profile__info{인생은 짧습니다. <br />파이썬3를 사용하세요!!}
```

### 5. Story

```
.story>.story__container>(div.story__content>(div.story__img>img[src="https://picsum.photos/seed/picsum$/200/300" alt=""])+div.story__title{여행})*10
```

### 6. Statistics (통계)

```
.statistics{statistics}
```

### 7. Toolbar

```
.toolbar{toolbar}
```

### 8. Content - 사진 그리드

```
.content>.content__container>(div.content__photo>img[src="https://picsum.photos/seed/$/300/300" alt=""])*30
```

### 9. Footer

```
footer>.footer__container>(.footer__item>i.fas.fa-home)+(.footer__item>i.fas.fa-search)+(.footer__item>i.far.fa-plus-square)+(.footer__item>i.far.fa-heart)+(.footer__image>img[src="http://placekitten.com/300/300" alt=""])
```

## Emmet 사용 팁

1. **클래스 추가**: `.className`
2. **ID 추가**: `#idName`
3. **자식 요소**: `>`
4. **형제 요소**: `+`
5. **상위로 이동**: `^`
6. **반복**: `*숫자`
7. **그룹화**: `()`
8. **텍스트 추가**: `{텍스트}`
9. **속성 추가**: `[속성명="값"]`
10. **숫자 증가**: `$` (반복 시 1부터 증가)

### 전체 구조 한 번에 생성하기

완전한 HTML 구조를 한 번에 생성:

```
!>html>head>(meta[charset="UTF-8"]+meta[http-equiv="X-UA-Compatible" content="IE=edge"]+meta[name="viewport" content="width=device-width, initial-scale=1.0"]+link[rel="stylesheet" href="./pirostagram.css"]+script[src="https://kit.fontawesome.com/7d6a50a6b2.js" crossorigin="anonymous"]+title{Document})+body>(header>.header__container>.header__icon>i.fas.fa-cog^.header__username{pirogramming}+.header__icon>i.fas.fa-user-plus)^main>(.profile>(.profile__top>.profile__img>img[src="https://picsum.photos/300/500" alt=""]^.profile__right>.profile__username{pirogramming}+.profile__btn>button{프로필 편집})^.profile__bottom>span.profile__name{김피로}+br+span.profile__info{인생은 짧습니다. <br />파이썬3를 사용하세요!!})+(.story>.story__container>(div.story__content>(div.story__img>img[src="https://picsum.photos/seed/picsum$/200/300" alt=""])+div.story__title{여행})*10)+.statistics{statistics}+.toolbar{toolbar}+(.content>.content__container>(div.content__photo>img[src="https://picsum.photos/seed/$/300/300" alt=""])*30)^footer>.footer__container>(.footer__item>i.fas.fa-home)+(.footer__item>i.fas.fa-search)+(.footer__item>i.far.fa-plus-square)+(.footer__item>i.far.fa-heart)+(.footer__image>img[src="http://placekitten.com/300/300" alt=""])
```

## 스타일링 규칙

1. **BEM 네이밍**: `block__element--modifier`
2. **CSS 변수 사용**:
   - `--gray1`: 연한 회색
   - `--gray2`: 진한 회색
   - `--main-border`: 기본 테두리 스타일
3. **레이아웃**: Flexbox와 Grid 활용
4. **반응형 이미지**: `object-fit: cover` 사용

## Extra 기능 - On-Device AI 프로필 생성기

`extra/` 폴더에는 Chrome의 Prompt API (Gemini Nano)를 사용한 AI 프로필 소개글 생성 기능이 구현되어 있습니다.

### 요구사항

- Chrome 138+ (Canary)
- Gemini Nano 활성화
- 하드웨어: 4GB+ GPU VRAM, 22GB+ 저장공간

### 사용 방법

1. `extra/pirostagram.html`을 Chrome 138+에서 열기
2. "프로필 편집" 버튼 클릭
3. AI가 현재 프로필 정보를 기반으로 재미있는 소개글 생성

### 기능

- 현재 이름과 소개글을 분석하여 창의적인 새 소개글 생성
- 한국어로 생성되며 이모지 포함
- 로딩 상태 표시 및 애니메이션 효과
- 모델 다운로드 진행률 표시
