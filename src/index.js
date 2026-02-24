window.YaAuthSuggest.init(
      {
        client_id: "5a69cedc023b42259de1450bcc22e56d",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-seven.vercel.app/token.html",
      },
      "https://oauth-master-class-seven.vercel.app",
      {
        parentId: "buttonContainer",
        view: "button",
        buttonTheme: "light",
        buttonSize: "xs",
        buttonBorderRadius: 20,
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
