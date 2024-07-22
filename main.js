async function write_timestamp(excel) {
    /*Jade.listing:{"name":"Timestamp","description":"This sample function records the current time in the selected cells"}*/
    excel.workbook.getSelectedRange().values = new Date();
    await excel.sync();
    Jade.print("hey")
}

function auto_exec() {
    // This function is called when the addin opens.
    // un-comment a line below to take action on open.

    // Jade.open_automations() // displays a list of functions for a user
    // Jade.open_editor()      // shows the code editor
}

async function get_prices() {
    await get_price("https://www.meleget.hu/syen-charm-soh09ch-e32da1b-oldalfali-inverteres-split-klima-csomag-27-kw?keyword=Syen%20charm")
}

async function get_price(url) {
    Jade.print(url)
    try {
        const res = await fetch("https://www.meleget.hu/syen-charm-soh09ch-e32da1b-oldalfali-inverteres-split-klima-csomag-27-kw?keyword=Syen%20charm", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "priority": "u=0, i",
                "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "cross-site",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "no-referrer",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        Jade.print(res)
        const text = await res.text()
        Jade.print(text)
        excel.workbook.getSelectedRange().values = new Date();
        await excel.sync();
    } catch (err) {
        Jade.print(err)
    }
}

function auto_exec() {
    /*Jade.listing:{"name":"Show invoice form","description":"Displays a form to manage the invoice example."}*/
    get_prices()
}
