import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
  const { data, isLoading } = useGetAllSemestersQuery({});

  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return <div>AcademicSemester</div>;
}
