const errorParser: Record<string, string> = {
  'Not authenticated':
    'No pudimos verificar tu sesión, porfavor vuelve a iniciar sesión. Si el problema persiste, contacta a soporte.',
  'Unprocessable Entity': 'Hubo un error validando los datos, si el problema persiste porfavor contacta a soporte.',
  'Not Found': 'Ocurrió un error inesperado, si el problema persiste porfavor contacta a soporte (NotFound).',
  'Failed to fetch':
    'No pudimos conectarnos al servidor, porfavor intentalo denuevo. Si el problema persiste contacta con soporte.'
}

export const fetchHandler = async (res: Response) => {
  const contentType = res.headers.get('content-type')
  const isJson = contentType?.includes('application/json') ?? false

  if (res.status === 422) {
    // Fastapi utiliza siempre el 422 para los error de validación
    throw new Error(errorParser['Unprocessable Entity'])
  }

  if (!res.ok) {
    if (isJson) {
      let err: string = 'Ocurrió un error inesperado, porfavor contacta a soporte. (from fHandler)'
      const { detail } = await res.json()

      if (typeof detail === 'string') {
        err = detail
      }

      const parsedError = errorParser[err] ?? err
      throw new Error(parsedError)
    }
  }

  if (isJson) {
    const data = await res.json()
    return data
  }
}

export const appFetch = async (url: string, options: RequestInit) => {
  delete (options.headers as Record<string, unknown>)?.['Content-Type']

  try {
    JSON.parse(options.body as string)
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    }
  } catch {}

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers
      },
      credentials: 'include'
    }).then(fetchHandler)
    return res
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : ''

    if (errMessage === 'Failed to fetch') {
      throw new Error('Ocurrió un error inesperado, es posible que el servidor esté caído, por favor contáctame.')
    }

    throw err
  }
}
