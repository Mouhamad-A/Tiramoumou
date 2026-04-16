exports.handler = async function (event) {
    const { nom, produit } = JSON.parse(event.body)

    await fetch(process.env.DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `Nouvelle commande !\n**Nom :** ${nom}\n**Produit :** ${produit} \n-------------------------------------\n`
        })
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
    }
}