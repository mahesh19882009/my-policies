export const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString))

export const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`