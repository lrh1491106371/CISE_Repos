import { useForm } from "react-hook-form";
import formStyles from "../../styles/Form.module.scss";

type FormData = {
  title: string;
  authors: string[];
  source: string;
  pubYear: number;
  doi: string;
  summary: string;
  linked_discussion: string;
};

const NewDiscussion = () => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      authors: [""],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="container">
      <h1>New Article</h1>
      <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title:</label>
        <input
          className={formStyles.formItem}
          type="text"
          id="title"
          {...register("title")}
        />

        <label htmlFor="author">Authors:</label>
        {/* 用数组的形式渲染作者，默认至少一个 */}
        {[0, 1, 2].map((index) => (
          <div key={index} className={formStyles.arrayItem}>
            <input
              type="text"
              className={formStyles.formItem}
              {...register(`authors.${index}` as const)}
            />
          </div>
        ))}

        <label htmlFor="source">Source:</label>
        <input
          className={formStyles.formItem}
          type="text"
          id="source"
          {...register("source")}
        />

        <label htmlFor="pubYear">Publication Year:</label>
        <input
          className={formStyles.formItem}
          type="number"
          id="pubYear"
          {...register("pubYear", { valueAsNumber: true })}
        />

        <label htmlFor="doi">DOI:</label>
        <input
          className={formStyles.formItem}
          type="text"
          id="doi"
          {...register("doi")}
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          className={formStyles.formTextArea}
          {...register("summary")}
        />

        <select {...register("linked_discussion")}>
          <option value="">Select SE practice...</option>
          <option value="TDD">TDD</option>
          <option value="Mob Programming">Mob Programming</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default NewDiscussion;