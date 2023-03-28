const getPerson = (obj) => {
  try {
    if (typeof obj !== "object" || !("name" in obj) || !("age" in obj)) {
      throw new Error("Invalid parameter");
    }
    let { name, age } = obj;
    console.log(`Name:${name},Age:${age}`);
  } catch (e) {
    console.log(e.message);
  }
};
getPerson({ name: "deepank", age: 20 });
getPerson({ name: "deepank" });
getPerson("deepank");
