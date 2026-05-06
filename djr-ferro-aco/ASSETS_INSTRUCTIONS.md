# Instruções para Substituir Imagens

## Localização dos Placeholders

As imagens devem ser salvas em: `public/assets/`

## Imagens Necessárias

### 1. **hero-djr.jpg** (Seção Hero)
- **Localização:** `public/assets/hero-djr.jpg`
- **Dimensões recomendadas:** 800x600px ou maior (aspect ratio 4:3)
- **Descrição:** Pátio industrial com aço, vergalhões ou estrutura da empresa
- **Uso:** Aparece ao lado direito do texto hero (apenas em telas lg+)
- **Fallback:** Gradiente cinza se imagem não existir

### 2. **produto-vergalhoes.jpg**
- **Localização:** `public/assets/produto-vergalhoes.jpg`
- **Dimensões recomendadas:** 600x400px
- **Descrição:** Vergalhões CA-50/CA-60 em diversos diâmetros
- **Uso:** Card na galeria de produtos

### 3. **produto-vigas.jpg**
- **Localização:** `public/assets/produto-vigas.jpg`
- **Dimensões recomendadas:** 600x400px
- **Descrição:** Vigas e perfis estruturais (I, U, W)
- **Uso:** Card na galeria de produtos

### 4. **produto-telas.jpg**
- **Localização:** `public/assets/produto-telas.jpg`
- **Dimensões recomendadas:** 600x400px
- **Descrição:** Telas eletrosoldadas para lajes
- **Uso:** Card na galeria de produtos

### 5. **produto-chapas.jpg**
- **Localização:** `public/assets/produto-chapas.jpg`
- **Dimensões recomendadas:** 600x400px
- **Descrição:** Chapas galvanizadas, expandidas
- **Uso:** Card na galeria de produtos

### 6. **produto-tubos.jpg**
- **Localização:** `public/assets/produto-tubos.jpg`
- **Dimensões recomendadas:** 600x400px
- **Descrição:** Tubos redondos, quadrados e retangulares
- **Uso:** Card na galeria de produtos

### 7. **produto-arame.jpg**
- **Localização:** `public/assets/produto-arame.jpg`
- **Dimensões recomendadas:** 600x400px
- **Descrição:** Arame recozido, pregos, acessórios
- **Uso:** Card na galeria de produtos

## Comportamento de Fallback

- Se uma imagem **não existir**, o componente mostra um placeholder cinzento com o nome do produto centralizado
- Nenhum erro será exibido no console
- A página continua totalmente funcional sem as imagens

## Dicas de Otimização

1. **Compressão:** Use ferramentas como TinyPNG ou ImageOptim antes de salvar
2. **Formato:** Prefira JPEG ou WebP para fotos, PNG para gráficos
3. **Tamanho:** Mantenha arquivos abaixo de 500KB cada
4. **Proporções:** Hero: 4:3 | Produtos: 3:2

## Estrutura de Pastas

```
djr-ferro-aco/
├── public/
│   ├── logo.png
│   └── assets/
│       ├── hero-djr.jpg
│       ├── produto-vergalhoes.jpg
│       ├── produto-vigas.jpg
│       ├── produto-telas.jpg
│       ├── produto-chapas.jpg
│       ├── produto-tubos.jpg
│       └── produto-arame.jpg
```

## Hot Reload

Após salvar as imagens em `public/assets/`, o Vite recarregará automaticamente a página no desenvolvimento (`npm run dev`).
