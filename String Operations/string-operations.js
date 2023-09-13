let str = "Java Is opensource language and Javascript is scripting lanuguage. java Is very user-friendly and easy to use"
console.log(str.replace("Java", "Python"));
console.log(str.replaceAll(/java/g, "Python"));
console.log(str.replace(/java/gi, "Hello"));
console.log(str.replace(/is/gi, "are"));