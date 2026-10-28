# muppin.org

`muppin.org`(k3s `web` 네임스페이스의 `muppin-web`)에 올라가는 파일이다. ArgoCD가 관리하지 않으므로 바꾼 뒤 직접 반영한다.

- `html/assetlinks.json` — 안드로이드 앱 링크 인증
- `html/post.html` — 앱에서 공유한 게시물 링크(`/post/<id>`) 안내 페이지

```bash
kubectl -n web create configmap muppin-web-html --from-file=html/ --dry-run=client -o yaml | kubectl apply -f -
kubectl -n web create configmap muppin-web-nginx --from-file=default.conf --dry-run=client -o yaml | kubectl apply -f -
kubectl -n web rollout restart deployment/muppin-web
```
