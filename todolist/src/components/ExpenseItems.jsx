import "./ExpenseItems.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  return (
    <Card className="bg-yellow-300 w-full">
      <div className="flex items-center justify-center gap-10">
        <ExpenseDate date={props.date} />
        <h3 className="text-slate-200">{props.title}</h3>
        <div className="font-bold">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
