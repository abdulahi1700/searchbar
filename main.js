const search = () => {
  const SearchBox = document.getElementById("searchitem").value.toUpperCase();
  const StoreItems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = StoreItems.getElementsByTagName("h2");

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(SearchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
