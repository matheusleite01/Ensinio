import "@testing-library/jest-dom";
import "@/utils/i18n";
import ApiResources from "@/components/ApiResources";
import { getByRole, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { renderWithTheme } from "@/lib/renderWithTheme";
import { rest } from "msw";
import { setupServer } from "msw/node";

import store from "@/redux/configureStore";

describe("ApiResources component", () => {
  const worker = setupServer(
    rest.get(
      "https://json-teste-one.vercel.app/items",
      async (req, res, ctx) => {
        return res(
          ctx.json([
            {
              id: 1,
              title: {
                pt: "Trilhas",
                en: "Steps",
                es: "Pasos",
              },
              description: {
                pt: "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.",
                en: "Create study plans by specifying classes or courses and defining the order in which your students should study.",
                es: "Crea planes de estudio especificando clases o cursos y definiendo el orden en el que tus alumnos deben estudiar.",
              },
            },
          ]),
        );
      },
    ),
  );

  beforeAll(() => {
    worker.listen();
  })

  beforeEach(() => {
    worker.resetHandlers();
  })
  it("should fetch and show data when start", async() => {
    renderWithTheme(
      <Provider store={store}>
        <ApiResources />
      </Provider>,
    );

    const title = await screen.findByText("Trilhas");
    const description = await screen.findByText("Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();

  });

  it("should show error message on fetch error ", async() => {
    worker.use(
      rest.get(
        "https://json-teste-one.vercel.app/items",
        async (req, res, ctx) => {
          return res(
            ctx.status(500)
          );
        },
      ),
    );
    renderWithTheme(
      <Provider store={store}>
        <ApiResources />
      </Provider>,
    );

      const error = await screen.findByRole("errorFetch")
      
      expect(error).toBeInTheDocument();
  });

  it("should skeleton show when start", async() => {
    renderWithTheme(
      <Provider store={store}>
        <ApiResources />
      </Provider>,
    );

    const skeleton =  screen.getAllByRole("main")
    expect(skeleton[0]).toBeInTheDocument();
    

  });
});
