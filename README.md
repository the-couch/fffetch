# Beer Me - fun beer app

## Up and running:

Create a `now.json` file in the root directory with the following information:

```
{
  "env": {
    "TWILIO_ACCOUNT_SID": "",
    "TWILIO_AUTH_TOKEN": "",
    "TWILIO_NUMBER": ""
  }
}
```

I used twilio, you can create an account online and purchase a number (it's only a dollar for a local number).

```
npm run dev
```

Assumes you're using now for deployment should be easy enough to deploy else where
