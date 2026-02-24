window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "5a69cedc023b42259de1450bcc22e56d",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-seven.vercel.app/token.html",
      },
      "https://oauth-master-class-seven.vercel.app",
    )
   .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
};
