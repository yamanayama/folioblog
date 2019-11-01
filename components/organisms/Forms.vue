<template lang="pug">
  //- form
  #form.form
    form#contact.netlify
      .form__block
        .form__head
          h2.form__title.title
            span contact
            | お問い合わせ
        ul.form__list
          li.form__list__item
            input(type="text" name="name" placeholder="Name")
          li.form__list__item
            input(type="email" name="email" placeholder="Email")
          li.form__list__item
            textarea(type="text" name="message" placeholder="Message")
          li.form__list__item
            | お急ぎの方はtwitter,Facebookをご利用ください。
        button#submit(type="submit")
          | 送信する
</template>


<style lang="scss" scoped>
.form {
  &__block {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    border-radius: 6px;
    background-color: $white;
  }

  &__head {
    -webkit-border-radius: 6px 6px 0px 0px;
    -moz-border-radius: 6px 6px 0px 0px;
    border-radius: 6px 6px 0px 0px;
    background-color: #2abca7;
    color: $white;
  }
}

h2 {
  text-align: center;
  padding: 18px 0 18px 0;
  font-size: 1.4em;
}
input {
  margin-bottom: 10px;
}
textarea {
  height: 100px;
  margin-bottom: 10px;
}
input:first-of-type {
  margin-top: 35px;
}
input,
textarea {
  font-size: 1em;
  padding: 15px 10px 10px;
  font-family: "Source Sans Pro", arial, sans-serif;
  border: 1px solid #cecece;
  background: #d7d7d7;
  color: $white;
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
  color: $white;
}
:-moz-placeholder {
  color: $white;
}
::-moz-placeholder {
  color: $white;
}
:-ms-input-placeholder {
  color: $white;
}
button {
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #2abca7;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #2abca7;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 30%;
  color: #fff;
}
button:hover,
.button:hover {
  background: #19a08c;
}
label.error {
  font-family: "Source Sans Pro", arial, sans-serif;
  font-size: 1em;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
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
  button {
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