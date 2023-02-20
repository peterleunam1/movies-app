import { FC, useState } from "react";
import { useReviews } from "@/hooks";
import { Button, Review } from "@/components";

const ListOfReviews: FC = () => {
  const { reviews } = useReviews();
  const { reviews: reviewsInEnglish } = useReviews("en");
  const [exist, setExists] = useState(false);

  return (
    <>
      <h2 style={{ margin: "2.5rem 0px" }}>Reseñas</h2>
      {reviews?.results.length !== 0 ? (
        <>
          {reviews?.results.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </>
      ) : (
        <p>No hay reseñas</p>
      )}
      {reviewsInEnglish?.results.length !== 0 && (
        <>
          <Button
            text={`${exist ? "Ocultar" : "Mostrar"} reseñas en inglés`}
            onClick={() => setExists(!exist)}
          />
          {exist && (
            <>
              {reviewsInEnglish?.results.map((review) => (
                <Review key={review.id} {...review} />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ListOfReviews;
