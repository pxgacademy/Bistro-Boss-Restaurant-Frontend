import Loading from "../../../../components/loading/Loading";
import useAPI_Loader from "../../../../hooks/useAPI_Loader";

import {
  BarChart as Bar_Chart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import TriangleBar from "./TriangleBar";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#D99904"];

const BarChart = () => {
  const [chartData, chartLoading] = useAPI_Loader(
    "order-analytics",
    "order-analytics"
  );

  if (chartLoading) return <Loading />;
  return (
    <div>
      <Bar_Chart
        width={700}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Bar
          dataKey="quantity"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => {
            entry.color =
              entry.category === "salad"
                ? colors[0]
                : entry.category === "pizza"
                ? colors[1]
                : entry.category === "dessert"
                ? colors[2]
                : entry.category === "drinks"
                ? colors[3]
                : colors[4];
            return <Cell key={`cell-${index}`} fill={entry?.color} />;
          })}
        </Bar>
      </Bar_Chart>
    </div>
  );
};

export default BarChart;
