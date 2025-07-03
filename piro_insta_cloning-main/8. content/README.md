# 8. Content - 사진 그리드 갤러리

## 이번 단계에서 배우는 것
CSS Grid를 사용하여 인스타그램 스타일의 사진 그리드 레이아웃을 구현합니다.

## 추가된 내용
- 3열 그리드 레이아웃
- 정사각형 이미지 비율 유지
- 간격(gap) 설정

## 핵심 개념
### CSS Grid 기본
```css
.content__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
}
```

### 정사각형 비율 유지
```css
.content__photo > img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
```

### Grid 주요 속성
- `grid-template-columns`: 열 개수와 크기 정의
- `repeat(3, 1fr)`: 3개의 동일한 너비 열 생성
- `gap`: 그리드 아이템 간 간격

## 학습 포인트
✅ CSS Grid로 반응형 레이아웃 구성  
✅ aspect-ratio로 요소 비율 고정  
✅ fr 단위로 유연한 크기 설정  
✅ gap으로 깔끔한 간격 조정