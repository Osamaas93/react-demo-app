import { Rating, Stack } from "@mui/material";

export default function RatingStars({ rating }) {
  return (
    <div>
      <Stack spacing={1}>
        <Rating
          size="small"
          name="half-rating-read"
          value={rating}
          precision={0.2}
          readOnly
        />
      </Stack>
    </div>
  );
}
