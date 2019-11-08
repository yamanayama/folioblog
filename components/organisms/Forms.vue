<template lang="pug">
  //- form
  #form.form
    form#contact.netlify
      .form__block
        ul.form__list
          li.form__list__item
            label
              | 名前
            input(type="text" name="name" placeholder="Name")
          li.form__list__item
            label
              | メールアドレス
            input(type="email" name="email" placeholder="Email")
          li.form__list__item
            label
              | メッセージ
            textarea(type="text" name="message" placeholder="Message")
        button#submit(type="submit")
          | 送信する
</template>


<style lang="scss" scoped>
.form {
  &__block {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    @include radius;
    background-color: $white;
    padding: 32px 24px;
    margin: 32px auto;
  }
}

input {
  margin-bottom: 24px;
}
textarea {
  height: 100px;
  margin-bottom: 24px;
}
input:first-of-type {
  margin-bottom: 24px;
}
input,
textarea {
  font-size: 1em;
  padding: 15px 10px 10px;
  border: none;
  background: $bg100;
  color: $text100;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}
::-webkit-input-placeholder {
  color: $text100;
}
:-moz-placeholder {
  color: $text100;
}
::-moz-placeholder {
  color: $text100;
}
:-ms-input-placeholder {
  color: $text100;
}
label.error {
  font-family: "Source Sans Pro", arial, sans-serif;
  font-size: 1em;
  display: block;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #d89c9c;
  width: 80%;
  margin: auto;
  color: $white;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
/* media queries */
@media (max-width: 700px) {
  label.error {
    width: 90%;
  }
  input,
  textarea {
    width: 90%;
  }
  body {
    padding-top: 10px;
  }
}
.message {
  font-family: "Source Sans Pro", arial, sans-serif;
  font-size: 1.1em;
  display: none;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #2abca7;
  width: 80%;
  margin: auto;
  color: $white;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
</style>