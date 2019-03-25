<?php
declare(strict_types=1);


namespace App\Command;


use App\Repository\ThemeRepository;
use App\Service\UpdateService;
use phpDocumentor\Reflection\Types\Self_;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateThemeCommand extends Command
{
    protected static $defaultName = 'app:update-theme';
    /**
     * @var UpdateService
     */
    private $updateService;
    /**
     * @var ThemeRepository
     */
    private $themeRepository;

    public function __construct(UpdateService $updateService, ThemeRepository $themeRepository)
    {
        parent::__construct(self::$defaultName);

        $this->updateService = $updateService;
        $this->themeRepository = $themeRepository;
    }

    protected function configure()
    {
        $this->addArgument('themeId', null, 'The Id of the Theme to Update');
        $this->setName(self::$defaultName);
        $this->setDescription('Update the theme by id');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        try {
            $themeId = (int) $input->getArgument('themeId');

            $theme = $this->themeRepository->find($themeId);
            $this->updateService->updateTheme($theme);
            $output->writeln("Successful update {$theme->getName()}");
        } catch (\Exception $exception) {
            $output->writeln('Error: ' . $exception);
        }
    }
}