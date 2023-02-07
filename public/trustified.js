const connectButton = document.getElementById("connect");

connectButton.addEventListener("click", async () => {
  await ethereum.request({ method: "eth_requestAccounts" });
});

async function TrustifiedLogin(chain) {
  if (typeof window["ethereum"] === "undefined") {
    alert("MetaMask is not installed!");
    return false;
  }

  const verify_btn = document.getElementById("verify_btn");
  var defaultBtnText = verify_btn.innerText;

  const accounts = await window["ethereum"].request({
    method: "eth_requestAccounts",
  });

  const account = accounts[0];

  let body = {
    chain: chain,
    userAddress: account,
  };

  verify_btn.innerHTML = defaultBtnText + "<div id='verify_btn_loader'></div>";
  const response = await fetch(
    "https://trustified-api-o5zg.onrender.com/trustified/api/login",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const myJson = await response.json();

  return myJson.status;
}
