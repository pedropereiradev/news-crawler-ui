# News Crawler Frontend

Interface web desenvolvida em Next.js para exibição de notícias coletadas via API.

## 📋 Descrição

Frontend responsivo que consome a API News Crawler e exibe as notícias em cards organizados, com suporte a imagens e links diretos para as matérias originais.

## 🚀 Tecnologias Utilizadas

- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn/ui
- React 19

## 💻 Pré-requisitos

- Node.js 18 ou superior
- pnpm (gerenciador de pacotes)
- API News Crawler em execução

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/news-crawler.git
cd news-crawler/news-crawler
```

2. Instale as dependências
```bash
pnpm install
```

3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. Execute o frontend
```bash
# Desenvolvimento
pnpm dev

# Produção
pnpm build
pnpm start
```

O frontend estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
news-crawler/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Página principal
│   │   └── api/news/       # Rota da API
│   ├── components/
│   │   ├── NewsCard.tsx    # Componente de card
│   │   └── ui/            # Componentes UI
│   ├── types/
│   │   └── news.ts        # Tipagens
│   └── lib/
│       └── api.ts         # Utilitários de API
└── public/                # Arquivos estáticos
```

## 🎨 Componentes

### NewsCard
Componente responsável por exibir uma notícia individual.

Propriedades:
```typescript
interface News {
  id: string;
  title: string;
  link: string;
  site: string;
  img?: string;
}

interface Props {
  news: News;
}
```

## ⚙️ Configuração

### Variáveis de Ambiente

Development (.env.development):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Production (.env.production):
```env
NEXT_PUBLIC_API_URL=https://sua-api.com
NEXT_PUBLIC_BASE_URL=https://seu-site.com
```

## 📱 Features

- Layout responsivo
- Carregamento dinâmico de imagens
- Fallback para imagens não disponíveis
- Tratamento de erros
- Loading states

## ⚠️ Limitações Conhecidas

- Algumas imagens podem não carregar devido a restrições de CORS
- Não há sistema de paginação implementado
- Não há sistema de busca ou filtros

## 🚀 Melhorias Futuras (Frontend)

### Funcionalidades
- [ ] Implementar sistema de busca de notícias
- [ ] Adicionar filtros por portal e categoria
- [ ] Criar sistema de favoritos
- [ ] Implementar compartilhamento de notícias

### Interface
- [ ] Criar diferentes layouts de visualização (lista, grid, etc)
- [ ] Implementar infinite scroll
- [ ] Adicionar animações de transição
- [ ] Implementar temas personalizáveis

### UX/UI
- [ ] Melhorar tratamento de erros visual

### SEO
- [ ] Otimizar meta tags
- [ ] Implementar sitemap
- [ ] Adicionar schema markup
- [ ] Melhorar URLs amigáveis
- [ ] Implementar RSS feed

### Analytics
- [ ] Implementar rastreamento de eventos
- [ ] Adicionar heatmaps
- [ ] Criar dashboard de métricas
- [ ] Implementar A/B testing
- [ ] Monitorar performance real

### Integração
- [ ] Implementar autenticação de usuários
- [ ] Adicionar integração com redes sociais
- [ ] Adicionar suporte a diferentes idiomas
