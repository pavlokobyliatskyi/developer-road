In the proto directory

```bash
protoc users.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=typescript,mode=grpcwebtext:.
```
