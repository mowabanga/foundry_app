"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", transactions: 186 },
  { month: "February", transactions: 305 },
  { month: "March", transactions: 237 },
  { month: "April", transactions: 73 },
  { month: "May", transactions: 209 },
  { month: "June", transactions: 214 },
]

const chartConfig = {
  transactions: {
    label: "Transactions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function TransactionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions Chart History</CardTitle>
        <CardDescription>
          Showing contributions for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="transactions"
              type="natural"
              fill="hsl(217.2 91.2% 59.8%)"
              fillOpacity={0.4}
              stroke="hsl(217.2 91.2% 59.8%)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
