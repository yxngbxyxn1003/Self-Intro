# 5. Story - 스토리 하이라이트

## 이번 단계에서 배우는 것
가로 스크롤이 가능한 스토리 섹션을 구현하면서 Flexbox와 overflow 속성을 학습합니다.

## 추가된 내용
- 스토리 컨테이너와 개별 스토리 아이템 구조
- 원형 이미지 썸네일
- 가로 스크롤 영역

## 핵심 개념
### Flexbox 레이아웃
```css
.story__container {
  display: flex;
  overflow: scroll;
}
```

### 원형 이미지 만들기
```css
.story__img > img {
  border-radius: 50%;
  object-fit: cover;
}
```

### overflow 속성
- `overflow: scroll`: 콘텐츠가 넘칠 때 스크롤 가능
- 가로 스크롤을 위한 flex 컨테이너 설정

## 학습 포인트
✅ Flexbox를 활용한 가로 배치  
✅ border-radius로 원형 요소 만들기  
✅ object-fit으로 이미지 비율 유지  
✅ overflow 속성으로 스크롤 영역 구현