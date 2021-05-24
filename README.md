# FE News Bot

Naver에서 발행하는 [FE News](https://github.com/naver/fe-news)의 업데이트를 첫번째 주 수요일 7pm 이후 Slack으로 받아 보실 수 있습니다. 

## 사용방법 

1. project를 Fork합니다.
2. [Incoming WebHooks](https://66lounge.slack.com/apps/A0F7XDUAZ-incoming-webhooks) URL이 필요합니다. WebHook의 URL을 [Github Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)에 등록해 주세요. 
웹훅이 여러개 일 경우엔 `,`로 구분해 주세요.
```
https://hooks.slack.com/services/a1,
https://hooks.slack.com/services/a2
```
![secrets.png](https://github.com/yami03/fe-news-bot/blob/main/assets/secrets.png)

## Slack 메시지

![Slack Image](https://github.com/yami03/fe-news-bot/blob/main/assets/slack.png)

## 참고 
* [GitHub Action을 사용해 새로 올라온 전월세 방 목록 받아보기](https://ahnheejong.name/articles/receive-new-room-notification-mails-using-github-action/)
* [Github Action으로 매일마다 브리핑 받기!](https://velog.io/@jwn4492/Github-Action%EC%9C%BC%EB%A1%9C-%EB%A7%A4%EC%9D%BC%EB%A7%88%EB%8B%A4-%EB%B8%8C%EB%A6%AC%ED%95%91-%EB%B0%9B%EA%B8%B0)
