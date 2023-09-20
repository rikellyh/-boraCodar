import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

import "../styles/_dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Header />
      <section>
        <Card title="NPS geral">
          <p>Hello</p>
        </Card>
        <Card title="Vendas fechadas">
          <p>Hello</p>
        </Card>
        <Card title="Meta mensal">
          <p>Hello</p>
        </Card>
        <Card title="Vendas por dia da semana">
          <p>Hello</p>
        </Card>
      </section>
    </>
  );
};

export default Dashboard;
