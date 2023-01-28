const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    });
  },

  async sendBallotData(payload) {
    await fetch('/api/submitBallotData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "selectedBallots": payload
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Do some stuff ...
      })
      .catch((err) => console.log(err));

  },
};

export default api;