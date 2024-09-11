<div align='center'>
<img src='https://github.com/user-attachments/assets/4d7e4eda-2923-4963-af6c-81d01c8421bb'/>

</div>

</br>

<div align='justify'>
<p>
This web application allows users to purchase foreign currencies like USD or EUR. The user can input the amount of currency they want to buy, specify the state tax, and choose their payment method (cash or card). The system fetches the current exchange rate from an API and calculates the total amount in Brazilian reais (BRL), including all relevant fees and taxes. The final amount payable is displayed for the user.
</p>
</div>

<div align='center'>

<img src='https://github.com/user-attachments/assets/83bb2281-7fbd-4c34-b951-e63aa3fc6d5f'/>

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

</div>
<div align='center'>

<a href='https://buy-money.vercel.app/' target='_blank' style='font-size: 1.2rem; font-weight: bolder'>Link to Application</a>

</div>

## Techs

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/guide/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
</br>
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](<(https://www.typescriptlang.org/)>)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Libs

- [React Router Dom](https://reactrouter.com/en/main)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [Tanstack Query (React Query)](https://tanstack.com/query/latest) + [Axios](https://axios-http.com/docs/intro)
- [Json Server](https://www.npmjs.com/package/json-server)
- [Styled Components](https://styled-components.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Polished](https://polished.js.org/)

## How to Run

![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Debian](https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

1. Create the environment file **`.env`**

```bash
cp .env.example .env
```

2. Install the packages

```bash
npm install
```

3. Run [`Json Server`](#json-server) and keep it running

```bash
npm run server
```

4. Run the project in another terminal

```bash
npm run dev
```

---

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── server/
│   └── <!-- Json Server files -->
├── src/
│   ├── components/
│   │   ├── assets/
│   │   ├── buttons/
│   │   ├── layout/
│   │   └── loaders/
│   ├── config/
│   │   └── environment.ts
│   ├── hooks/
│   │   └── <!-- Api Query Hook -->
│   ├── styles/
│   │   └── <!-- Styled Components root structures -->
│   ├── types/
│   │   ├── styled-components.d.ts
│   │   └── type-api-query.ts
│   ├── utils/
│   │   ├── masks.ts
│   │   └── calcValueToBuyCurrency.ts
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── index.html
└── package.json
```

## Json Server

#### GET/

```json
{
  "USDBRL": {
    "code": "USD",
    "codein": "BRL",
    "name": "Dólar Americano/Real Brasileiro",
    "high": "5.662",
    "low": "5.5699",
    "varBid": "-0.0646",
    "pctChange": "-1.15",
    "bid": "5.5744",
    "ask": "5.5761",
    "timestamp": "1725569439",
    "create_date": "2024-09-05 17:50:39"
  },
  "EURBRL": {
    "code": "EUR",
    "codein": "BRL",
    "name": "Euro/Real Brasileiro",
    "high": "6.2651",
    "low": "6.1854",
    "varBid": "-0.0493",
    "pctChange": "-0.79",
    "bid": "6.1831",
    "ask": "6.1911",
    "timestamp": "1725569433",
    "create_date": "2024-09-05 17:50:33"
  }
}
```

<h2>Thanks for the visit!</h2>
