import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";
const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEdited = !!editedExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdited]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId);
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEdited) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test2111",
        amount: 212,
        date: new Date("2024-06-27"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 123,
        date: new Date("2024-06-24"),
      });
    }

    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEdited ? "Update" : "Add"}
        </Button>
      </View>
      {isEdited && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            onPress={deleteExpenseHandler}
            color={GlobalStyles.colors.error500}
            size={24}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  button: { minWidth: 120 },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
