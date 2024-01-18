import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [initialValue, itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "Programar en React", completed: true },
//   { text: "Hacer ejercicios de torso", completed: true },
//   { text: "Sacar a Zeus", completed: false },
//   { text: "Implementar el nuevo componente en el proyecto", completed: false },
//   { text: "Usar estados en React", completed: false },
// ];

// localStorage.setItem("Todos_v1", JSON.stringify(defaultTodos));
// localStorage.removeItem("Todos_v1");
