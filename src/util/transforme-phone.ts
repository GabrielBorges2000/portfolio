export function transformePhone(number: string): string {
    // Remove todos os caracteres não numéricos do número de telefone
    const numberClean = number.replace(/\D/g, '')

    // Verifica se o número tem exatamente 13 dígitos (código do país + número)
    if (/^\d{13}$/.test(numberClean)) {
        // Remove o código do país (55)
        const localNumber = numberClean.substring(2)
        // Aplica a formatação desejada
        const numberFormatted = localNumber.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            '$1 $2-$3'
        )
        return numberFormatted
    }

    // Retorna o número original se não estiver no formato correto
    return number
}
