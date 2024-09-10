# buyMoney

<div align='justify'>
<p>
This web application allows users to purchase foreign currencies like USD or EUR. The user can input the amount of currency they want to buy, specify the state tax, and choose their payment method (cash or card). The system fetches the current exchange rate from an API and calculates the total amount in Brazilian reais (BRL), including all relevant fees and taxes. The final amount payable is displayed for the user.
</p>
</div>

## Techs

- [Vite (ReactJS)](https://vitejs.dev/guide/)
- [Typescript](https://www.typescriptlang.org/)

### Libs

- [React Router Dom](https://reactrouter.com/en/main)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [Tanstack Query (React Query)](https://tanstack.com/query/latest) + [Axios](https://axios-http.com/docs/intro)
- [Json Server](https://www.npmjs.com/package/json-server)
- [Styled Components](https://styled-components.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Polished](https://polished.js.org/)

## How to run?

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Create the environment file **`.env`**

```bash
cp .env.exemple .env
```

- Install the packages

```bash
npm install
```

- Run `Json Server` and keep it running...

```bash
npm run server
```

- ...and run the project in another terminal

```bash
npm run dev
```
