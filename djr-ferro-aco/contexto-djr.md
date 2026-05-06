# Contexto do Projeto: DJR Ferro e Aço (Versão Front-end Only)

## 1. Visão Geral
- **Cliente:** DJR Ferro e Aço
- **Setor:** Metalurgia e Construção Civil.
- **Público-Alvo:** B2B (Construtoras e Indústrias) na Grande BH.
- **Stack Técnica:** React + Vite + Tailwind CSS (Sem código Server-Side).
- **Hospedagem:** Site estático (Hostinger/Vercel).

## 2. Estratégia de Desenvolvimento
- **Arquitetura:** Componentização em React focada em performance e SEO semântico (W3C).
- **Sem Back-end:** Toda a lógica de interação (calculadora e formulários) deve ser client-side.
- **Estética:** Industrial moderna utilizando a paleta Slate e Orange.

## 3. Implementação de Recursos (Front-end)
- **Formulário de Contato:** 
    - Lógica de envio via API externa (ex: Formspree ou integração direta via link de WhatsApp) para evitar necessidade de servidor próprio.
    - Proteção Honeypot implementada via estado (React useState) para capturar bots.
- **Calculadora Técnica:** Componente puramente funcional em React para cálculo de peso de vergalhões por bitola (CA-50/60).
- **Responsividade:** Design mobile-first rigoroso para visualização em canteiros de obras.
- **Integração Social:** 
    - Feed do Instagram via componente client-side (ou widget externo).
    - Botões flutuantes de WhatsApp e Click-to-Call para telefone fixo.

## 4. SEO e Social (Meta Tags)
- **Open Graph:** Implementar no `index.html` as tags `og:title`, `og:image` e `og:description` para pré-visualização no WhatsApp e Instagram.
- **Miniatura:** Referenciar imagem de alta resolução do pátio de ferragens.
- **SEO Local:** Dados estruturados JSON-LD inseridos diretamente no cabeçalho estático.

## 5. Instruções para o Claude Code
- **Escopo:** Trabalhe apenas na pasta `src/` e no `index.html`.
- **Economia de Créditos:** Ignore a pasta `node_modules`. Não tente instalar pacotes server-side.
- **Dependências:** Utilize apenas React e Tailwind CSS.
- **Depreciação:** Utilize a configuração atualizada do Vite (sem a opção depreciada `esbuild` no plugin react-babel).

## 6. Informações Institucionais (Extraídas de /sobrenos.php)
- **História:** A DJR Ferro e Aço possui trajetória consolidada no mercado de Contagem e Grande BH, focada em soluções práticas para a construção civil.
- **Diferenciais Estratégicos:**
    - Experiência técnica na leitura e execução de projetos de armação de aço.
    - Pontualidade rigorosa na entrega para evitar paradas no cronograma da obra.
    - Estoque variado para atendimento imediato de demandas industriais.
- **Compromisso:** Foco em "Qualidade e Agilidade", garantindo que o aço chegue pronto para o uso (Corte e Dobra), reduzindo o desperdício de material no canteiro.

## 7. Catálogo de Serviços (Extraído de /servicos.php)
- **Corte e Dobra de Aço:** Execução técnica conforme projeto estrutural, visando a eliminação de perdas e otimização do cronograma de armação.
- **Armação de Colunas e Vigas:** Fornecimento de peças prontas para montagem, garantindo precisão nas dimensões e conformidade com as normas técnicas.
- **Corte de Chapas sob Medida:** Serviço de guilhotina e dobra para chapas de diversas espessuras, atendendo demandas específicas da indústria e serralheria.
- **Consultoria Técnica:** Auxílio na quantificação de materiais para evitar compras excessivas ou faltas no canteiro.

## 8. Mix de Produtos (Extraído de /produtos.php)
- **Aço para Construção Civil:**
    - Vergalhões CA-50 e CA-60 em barras ou rolos.
    - Telas eletrosoldadas para lajes e pisos.
    - Treliças para lajes pré-moldadas.
    - Arame recozido e pregos.
- **Perfis e Estruturais:**
    - Vigas I, U e W para estruturas metálicas pesadas.
    - Cantoneiras e ferros chatos.
    - Tubos industriais (redondos, quadrados e retangulares).
- **Chapas e Fechamentos:**
    - Chapas galvanizadas, pretas e finas a frio/quente.
    - Telas de alambrado e chapas expandidas.

## 9. Dados de Contato e SEO (Extraídos de /contato.php)
- **Canais Preferenciais:** Telefone Fixo (31 3396-8164) e WhatsApp (31 99360-8992).
- **E-mail:** [EMAIL_ADDRESS]
- **Endereço:** Rua Padre Vieira, 200 - Vilauia, Contagem/MG
- **Horário de Atendimento:** Segunda a sexta-feira, das 7h às 17h30.
- **SEO Local:** Cadastro estratégico no Google Meu Negócio com foco em "Fornecedor de Aço em Contagem".

## 10. Estratégia de Conteúdo para o Feed do Instagram
- **Pilar 1 (Engenharia):** Infográficos sobre tipos de aço (CA-50 vs CA-60) e guias de corte/dobra.
- **Pilar 2 (Produto):** Fotos profissionais do mix de produtos (Vergalhões, Vigas, Chapas) em alta resolução.
- **Pilar 3 (Obra):** Antes/Depois de canteiros atendidos com materiais da DJR.
- **Pilar 4 (Autoridade):** Vídeos curtos (Reels) do proprietário explicando processos ou dicas de estoque.