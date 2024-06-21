import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesItem from "./ExpensesItem";
const renderExpenseItem = (itemData) => {
  return <ExpensesItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
