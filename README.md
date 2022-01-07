# sk8view

> Client side three-dee sk8board

[![NPM](https://img.shields.io/npm/v/sk8view.svg)](https://www.npmjs.com/package/sk8view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add sk8view
```

## Usage

```jsx
import React, { Component } from 'react'

import { Hologram } from 'sk8view'

export default function Component() {
  const [bento, setBento] = useState("/object/1138")
  
  return <Hologram bento={bento} />
}
```

## License

MIT © [beamercola](https://github.com/beamercola)
