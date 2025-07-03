# 9. Footer - 하단 네비게이션

## 이번 단계에서 배우는 것
모바일 앱처럼 화면 하단에 고정되는 네비게이션 바를 구현합니다.

## 추가된 내용
- 하단 고정 네비게이션 바
- 아이콘 메뉴 배치
- 프로필 이미지 추가

## 핵심 개념
### Sticky 포지셔닝
```css
footer {
  position: sticky;
  bottom: 0;
}
```

### Flexbox 균등 배치
```css
.footer__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
```

### Position 속성 비교
- `static`: 기본값, 일반적인 문서 흐름
- `sticky`: 스크롤 시 지정 위치에 고정
- `fixed`: 뷰포트 기준 완전 고정
- `relative/absolute`: 상대/절대 위치

## 학습 포인트
✅ sticky positioning으로 스크롤 시 고정 효과  
✅ justify-content로 아이템 균등 배치  
✅ align-items로 수직 정렬  
✅ 모바일 UI 패턴 구현