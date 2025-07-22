import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is your top priority right now?",
      options: [
        "Migrating to a new data platform or optimizing current systems.",
        "Implementing advanced machine learning (ML) and operationalizing AI.",
        "Ensuring data governance and compliance for scalability."
      ]
    },
    {
      id: 2,
      question: "What challenges are you trying to solve?",
      options: [
        "Outdated or inefficient data infrastructure.",
        "Difficulty operationalizing AI/ML models.",
        "Lack of clarity on data ownership, compliance, or governance."
      ]
    },
    {
      id: 3,
      question: "What type of resource would be most helpful?",
      options: [
        "Migration guides, case studies, and toolkits.",
        "Advanced frameworks for MLOps and operationalizing AI.",
        "Governance models and compliance templates."
      ]
    },
    {
      id: 4,
      question: "What best describes your organization's current state?",
      options: [
        "Early stages of adopting or upgrading a data platform.",
        "We have an established platform and are focusing on scaling AI/ML capabilities.",
        "Prioritizing creating or enhancing policies and systems for governance and compliance."
      ]
    }
  ];

  const results = {
    migration: {
      title: "Migration and Optimization",
      description: "Your priority is migration or optimizing your current systems. Explore guides, tools, and strategies to streamline your processes and migrate seamlessly to Dataiku.",
      action: "Explore Migration Resources"
    },
    ml: {
      title: "Machine Learning (ML) and MLOps",
      description: "You're focused on implementing and operationalizing machine learning models. Check out frameworks and best practices for scaling ML projects and ensuring robust MLOps pipelines.",
      action: "Explore AI & MLOps Solutions"
    },
    governance: {
      title: "Data Governance and Compliance",
      description: "Your focus is on data governance and ensuring compliance for long-term scalability. Access governance frameworks, compliance checklists, and best practices for secure data management.",
      action: "Explore Governance Resources"
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getResult = () => {
    // Simple logic to determine result based on answers
    const answerValues = Object.values(answers);
    if (answerValues.includes("Migrating to a new data platform or optimizing current systems.")) {
      return results.migration;
    } else if (answerValues.includes("Implementing advanced machine learning (ML) and operationalizing AI.")) {
      return results.ml;
    } else {
      return results.governance;
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    return (
      <section className="py-16 bg-navy-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {result.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {result.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  {result.action}
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep - 1];

  return (
    <section className="py-16 bg-navy-medium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Quiz</h2>
          <div className="flex justify-center space-x-2 mb-6">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index + 1 === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : index + 1 < currentStep
                    ? 'bg-primary/50 text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentStep] || ""}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                    className="mt-1"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="text-card-foreground cursor-pointer flex-1"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button
                variant="primary"
                onClick={nextStep}
                disabled={!answers[currentStep]}
                className="flex items-center gap-2"
              >
                {currentStep === questions.length ? 'Get Results' : 'Next'}
                {currentStep < questions.length && <ChevronRight className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;